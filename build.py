#!/usr/bin/env python3

import markdown, os, os.path, shutil, subprocess, json, tempfile, atexit, time, email.utils

shutil.rmtree('build', ignore_errors=True)

pages = []
page_properties = 'date template title'.split()

print("Copying static files and parsing metadata...")

# TODO: make sure that URLs in feed.xml are absolute!

def format_path(path, filename):
    return ('/' + path if path else '') + '/' + filename

for contents_dir_path, dirnames, filenames in os.walk('contents'):
    path = contents_dir_path[len('contents')+1:]
    os.mkdir('build/' + path)
    for filename in filenames:
        contents_path = 'contents/' + format_path(path, filename)
        is_md = filename.endswith('.md') and not filename.startswith('.')
        is_json = filename.endswith('.json')
        if is_md or is_json:
            if is_md:
                lines = open(contents_path).readlines()
                assert lines[0] == '---\n'
                front_matter_end = lines.index('---\n', 1)
                assert front_matter_end != -1
                page = { 'metadata': dict() }
                for line in lines[1:front_matter_end]:
                    key, sep, value = line.partition(':')
                    value = value.strip()
                    (page if key in page_properties else page['metadata'])[key] = value
                md_string = ''.join(lines[front_matter_end+1:])
                page['filename'] = os.path.splitext(filename)[0] + '.html'
                page['html'] = markdown.markdown(md_string, extensions=['markdown.extensions.smarty', 'markdown.extensions.sane_lists', 'markdown.extensions.fenced_code', 'markdown.extensions.codehilite'], output_format='html5')
            elif is_json:
                page = json.loads(open(contents_path).read())
            if 'date' in page:
                time_struct = time.strptime(page['date'], "%Y-%m-%d")
                time_epoch = time.mktime(time_struct)
                page['rfc822date'] = email.utils.formatdate(time_epoch, localtime=True)
            page['source'] = filename
            page['path'] = path
            page['url'] = format_path(path, page['filename'] if page['filename'] != 'index.html' else '')
            pages.append(page)
        else:
            build_path = 'build' + format_path(path, filename)
            os.link(contents_path, build_path)
            print(contents_path, "->", build_path)

options = dict()
options['config'] = json.loads(open('config.json').read())
options['articles'] = [p for p in pages if p['template'].startswith('article')]
options['articles'].sort(key=lambda p: p['date'], reverse=True)

print("Starting renderers...")

renderers = []

for page in pages:
    options['page'] = page
    options_fd, options_path = tempfile.mkstemp(suffix='.json')
    atexit.register(os.remove, options_path)
    
    os.write(options_fd, json.dumps(options).encode('utf-8'))
    os.close(options_fd)
    
    print("contents{} -> build{}".format(format_path(page['path'], page['source']), format_path(page['path'], page['filename'])))
    
    template_fd = open("templates/" + page['template'])
    output_fd = open('build' + format_path(page['path'], page['filename']), 'w')
    renderer = subprocess.Popen(["pug", "--obj", options_path, "--path", ".", "--pretty"], stdin=template_fd, stdout=output_fd, cwd='templates')
    renderers.append(renderer)

print("Waiting for renderers to finish...")
    
for renderer in renderers:
    renderer.wait()
