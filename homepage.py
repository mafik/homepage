#!/usr/bin/env python3

import functools
import http.server
import socketserver
import socket
import sys
import markdown, os, os.path, shutil, subprocess, json, tempfile, atexit, time, email.utils, importlib

PORT = 8000

class Handler (http.server.SimpleHTTPRequestHandler):
    def __init__(self, request, client_address, server):
        super().__init__(request, client_address, server, directory='build')

    def end_headers (self):
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        http.server.SimpleHTTPRequestHandler.end_headers(self)

class Server(socketserver.TCPServer):
    def server_bind(self):
        self.socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.socket.bind(self.server_address)

URL = "https://mrogalski.eu"
TITLE_EN = "Marek Rogalski's Home Page"
TITLE_PL = "Strona domowa Marka Rogalskiego"
DESC_EN = "Projects, ideas and tools for hackers interested in artificial intelligence, programming languages and casual hacking."

def get_articles():
    articles = [p for p in pages if hasattr(p, 'date')]
    articles.sort(key=lambda a: a.date, reverse=True)
    return articles

def render_nav():
    list_html = ''
    for article in get_articles():
        try:
            list_html += f'''<li>
                <a href="{article.url}" lang="pl" title="{article.desc_pl}">{article.title_pl}</a>
                <a href="{article.url}" lang="en" title="{article.desc_en}">{article.title_en}</a>
                <time>{article.date}</time></li>'''
        except AttributeError:
            raise Exception(f"Article {article.path} is missing some of the required fields: title_pl, title_en, desc_pl, desc_en, date")
    return f'''<nav>
      <h1 lang="pl"><a href="/" style="color:black" title="{TITLE_PL}">{TITLE_PL}</a></h1>
      <h1 lang="en"><a href="/" style="color:black" title="{TITLE_EN}">{TITLE_EN}</a></h1>
      <div><img class="lang" src="/lang.png" title="Language PL/EN"><a rel="home" href="https://mrogalski.eu/feed.xml" type="application/rss+xml" title="RSS"><img class="rss" alt="RSS" src="data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIg0KICAgICBpZD0iUlNTaWNvbiINCiAgICAgdmlld0JveD0iMCAwIDggOCIgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiPg0KDQogIDx0aXRsZT5SU1MgZmVlZCBpY29uPC90aXRsZT4NCg0KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KICAgIC5idXR0b24ge3N0cm9rZTogbm9uZTsgZmlsbDogb3JhbmdlO30NCiAgICAuc3ltYm9sIHtzdHJva2U6IG5vbmU7IGZpbGw6IHdoaXRlO30NCiAgPC9zdHlsZT4NCg0KICA8cmVjdCAgIGNsYXNzPSJidXR0b24iIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHJ4PSIxLjUiIC8+DQogIDxjaXJjbGUgY2xhc3M9InN5bWJvbCIgY3g9IjIiIGN5PSI2IiByPSIxIiAvPg0KICA8cGF0aCAgIGNsYXNzPSJzeW1ib2wiIGQ9Im0gMSw0IGEgMywzIDAgMCAxIDMsMyBoIDEgYSA0LDQgMCAwIDAgLTQsLTQgeiIgLz4NCiAgPHBhdGggICBjbGFzcz0ic3ltYm9sIiBkPSJtIDEsMiBhIDUsNSAwIDAgMSA1LDUgaCAxIGEgNiw2IDAgMCAwIC02LC02IHoiIC8+DQoNCjwvc3ZnPg=="></a></div>
      <ul class="articles">{list_html}</ul>
      <hr>
      <ul>
        <li><a href="mailto:mafikpl@gmail.com">Email: mafikpl@gmail.com</a></li>
        <li><a href="https://github.com/mafik/">GitHub: @mafik</a></li>
        <li><a href="https://szmer.info/u/maf">Lemmy: @maf@szmer.info</a></li>
        <li><a href="https://101010.pl/@maf" rel="me">Mastodon: @maf@101010.pl</a></li>
        <li><a href="https://twitter.com/mafikpl">Twitter: @mafikpl</a></li>
      </ul>
    </nav>'''

def render_body(body_class, content=''):
    nav = render_nav()
    return f'''<body class="{body_class}">{nav}{content}<script src="/i18n.js"></script></body>'''

def render_layout(body, title_en=TITLE_EN, desc_en=DESC_EN, thumb=URL + '/snail.jpg', date='', microdata_type='Blog'):
    if date:
        meta_extra = f'<meta itemprop="dateCreated" content="{date}">' + \
                     f'<meta itemprop="datePublished" content="{date}">'
    else:
        meta_extra = ''

    return f'''<!DOCTYPE html>
<html itemscope itemtype="http://schema.org/{microdata_type}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta itemprop="name" content="{title_en}">
    <meta itemprop="description" content="{desc_en}">
    <meta name="description" content="{desc_en}">
    <meta itemprop="image" content="{thumb}">
    {meta_extra}
    <link rel="shortcut icon" href="/favicon.ico">
    <title>{title_en}</title>
    <link rel="alternate" href="https://mrogalski.eu/feed.xml" type="application/rss+xml" title="RSS">
    <link href="https://fonts.googleapis.com/css?family=Fira+Mono|Fira+Sans:400,300,500,600,400italic&amp;subset=latin-ext" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="/main.css">
    <link rel="stylesheet" href="/code.css">
  </head>
  {body}
</html>'''

def render_index(page):
    body = render_body('index')
    return render_layout(body)

def render_article(page):
    body = render_body('article', f'<article>{page.article_html}</article>')
    return render_layout(body, page.title_en, page.desc_en, page.thumb, page.date, 'Article')

def format_path(path, filename):
    return ('/' + path if path else '') + '/' + filename

class Page: pass

class Feed(Page):
    path = ''
    source = ''
    filename = 'feed.xml'
    def render(self):
        articles = get_articles()
        items = ''
        for article in articles:
            permalink = URL + article.url
            items += f'''<item>
        <title>{article.title_en}</title>
        <link>{permalink}</link>
        <pubDate>{article.rfc822date}</pubDate>
        <guid isPermaLink="true">{permalink}</guid>
        <author>Marek Rogalski</author>
        <media:thumbnail url="{permalink}{article.thumb}" />
        <description>{article.desc_en}</description>
</item>
'''
        return f'''<?xml version="1.0" encoding="utf-8" ?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{TITLE_EN}</title>
    <atom:link href="{URL}/feed.xml" rel="self" type="application/rss+xml"></atom:link>
    <link>{URL}</link>
    <description>{DESC_EN}</description>
    <pubDate>{articles[0].rfc822date}</pubDate>
    <language>en</language>
    {items}
  </channel>
</rss>
'''

def build():
    shutil.rmtree('build', ignore_errors=True)
    print("Copying static files and importing Python modules...")

    global pages
    pages = [Feed()]

    for contents_dir_path, dirnames, filenames in os.walk('contents'):
        path = contents_dir_path[len('contents')+1:]
        os.mkdir('build/' + path)
        for filename in filenames:
            contents_path = 'contents' + format_path(path, filename)
            is_md = filename.endswith('.md')
            is_hidden = filename.startswith('.')
            if is_hidden:
                continue
            elif is_md:
                page = Page()
                page.article_md = open(contents_path).read()
                md = markdown.Markdown(extensions=['attr_list', 'meta', 'smarty', 'sane_lists', 'fenced_code', 'codehilite'], output_format='html5')
                page.article_html = md.convert(page.article_md)
                page.meta = md.Meta
                for k, v in md.Meta.items():
                    setattr(page, k, v[0])
                page.filename = os.path.splitext(filename)[0] + '.html'
                page.source = filename
                if hasattr(page, 'date'):
                    time_struct = time.strptime(page.date, "%Y-%m-%d")
                    time_epoch = time.mktime(time_struct)
                    page.rfc822date = email.utils.formatdate(time_epoch, localtime=True)
                page.path = path
                page.url = format_path(path, page.filename if page.filename != 'index.html' else '')
                page.render = functools.partial(globals()[page.renderer], page)
                pages.append(page)
            else:
                build_path = 'build' + format_path(path, filename)
                print(contents_path, "->", build_path)
                os.link(contents_path, build_path)

    print("Rendering pages...")

    for page in pages:
        print("contents{} -> build{}".format(format_path(page.path, page.source), format_path(page.path, page.filename)))

        try:
            html = page.render()
        except Exception as e:
            raise Exception(f"Error while rendering page {page.path}/{page.source}") from e
                
        with open('build' + format_path(page.path, page.filename), 'w') as f:
            f.write(html)


def serve():
    with Server(("", PORT), Handler) as httpd:
        print("serving at port", PORT)
        httpd.serve_forever()


def deploy():
    subprocess.run(['rsync', '.', 'hyperdeck:~/mrogalski.eu/', '-rv'])

if __name__ == '__main__':
    if len(sys.argv) != 2 or sys.argv[1] not in ('build', 'serve', 'deploy'):
        print('Usage: python3 homepage.py [build|serve|deploy]')
        sys.exit(1)
    
    build() # always build
    
    if sys.argv[1] == 'serve':
        serve()
    elif sys.argv[1] == 'deploy':
        deploy()
