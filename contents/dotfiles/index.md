---
title: Dotfiles
desc_en: Scripts, dotfiles and setup instructions of a pragmatic hacker.
template: article.pug
thumb: hack.png
date: 2016-09-26
---

<h1>Dotfiles</h1>

<p>These are just some of my scripts & dotfiles that I run
whenever I get on a new workstation.</p>

<h2>SSH</h2>

<p>Gnubby key for remote access:</p> 

```bash
echo ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBKv2Gl1X0Zw+8/gKHk1hv9pFD/kBFiKpjbVB4gllZM2rI0s8TGc7b9ylMRFTlB+j/6iR7XeQinDnzbI/Jnpz4to= publickey > ~/.ssh/authorized_keys
```

<h2>Debian-derivatives</h2>

```bash
sudo apt-get install i3 emacs htop arandr git dunst gnome-font-viewer thunar pv steam qemu pavucontrol npm mplayer blueman xbacklight transmission evince ttf-bitstream-vera meld
```

<h2>Emacs</h2>

```bash
rm -f ~/.emacs
mkdir -p ~/.emacs.d/
cat << 'EOF' > ~/.emacs.d/init.el
(package-initialize)
(require 'package)
(add-to-list 'package-archives '("melpa" . "http://melpa.org/packages/") t)

(tool-bar-mode 0)
(menu-bar-mode 0)
(ido-mode 1)

;; Google stuff
(require 'google)
(require 'p4-google)                ;; g4-annotate, improves find-file-at-point
(require 'compilation-colorization) ;; colorizes output of (i)grep
(require 'rotate-clients)           ;; google-rotate-client
(require 'rotate-among-files)       ;; google-rotate-among-files
(require 'googlemenu)               ;; handy Google menu bar
(require 'p4-files)                 ;; transparent support for Perforce filesystem
(require 'google3)                  ;; magically set paths for compiling google3 code
(require 'google3-build)            ;; support for blaze builds
(require 'csearch)                  ;; Search the whole Google code base.
(setq google-build-system "blaze")
(global-set-key [M-down]    'next-error)
(global-set-key [M-up]      '(lambda () (interactive) (next-error -1)))
(global-set-key [f7] 'google-show-tag-locations-regexp)
(global-set-key [f8] 'google-show-callers)
(global-set-key [f9] 'google-pop-tag)
(global-set-key [f10] 'google-show-matching-tags)
(grok-init)

(set-default-font "Bitstream Vera Sans Mono 8")

(custom-set-variables
 '(inhibit-default-init nil)
 '(inhibit-startup-screen t)
 '(initial-major-mode (quote org-mode))
 '(initial-scratch-message "* ")
 '(server-mode t))
(custom-set-faces)
EOF
```

## Git

```bash
cat << 'EOF' > ~/.gitconfig
[user]
	name = Marek Rogalski
	email = mafikpl@gmail.com
EOF
```

## Bash

```bash
mkdir ~/bin

cat << 'EOF' > ~/.profile
. "$HOME/.variables"

if [ -n "$BASH_VERSION" ]; then
    if [ -f "$HOME/.bashrc" ]; then
    . "$HOME/.bashrc"
    fi
fi
EOF

cat << 'EOF' > ~/.variables
export EDITOR=emacs
export HOSTNAME=`hostname -f`

case "$HOSTNAME" in
  *.roam.*)
    GOOGLE=YES    
    ;;
  *.corp.*)
    GOOGLE=YES
    PRODACCESS=YES    
    ;;
  *)
    ;;
esac

if [ $PRODACCESS ]; then
  # necessary for perforce
  export P4CONFIG=.p4config
  export P4DIFF="colordiff -u "
  export P4MERGE=/google/src/files/head/depot/eng/perforce/mergep4.tcl
  export P4EDITOR=$EDITOR
  export WWW=/google/data/rw/users/${USER:0:2}/${USER}/www/
  export USE_CCACHE=1
  if [ -n "$DISPLAY" ] ; then export G4MULTIDIFF=1 ; fi
fi
EOF

cat << 'EOF' > ~/.bash_logout
# when leaving the console clear the screen to increase privacy
if [ "$SHLVL" = 1 ]; then
    [ -x /usr/bin/clear_console ] && /usr/bin/clear_console -q
fi
EOF

cat << 'EOF' > ~/.bash_aliases
alias ls='ls --color=auto'
alias dir='dir --color=auto'
alias vdir='vdir --color=auto'
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'
alias pbcopy='xsel --clipboard'
alias ruler='seq -s "" -f "%4.0f|" 5 5'
alias ff='find . -type f | xargs grep'
alias h='highlight -l -O xterm256 -s orion'
alias e='emacsclient'
tal() { awk '{ sum += $'${1:-0}' } END { OFMT="%.9g"; print sum }'; }
upto () { if [ -z "$1" ]; then return; fi; local upto=$1; cd "${PWD/\/$upto\/*//$upto}"; }
colors() {
    local fgc bgc vals seq0
    printf "Color escapes are %s\n" '\e[${value};...;${value}m'
    printf "Values 30..37 are \e[33mforeground colors\e[m\n"
    printf "Values 40..47 are \e[43mbackground colors\e[m\n"
    printf "Value  1 gives a  \e[1mbold-faced look\e[m\n\n"
    # foreground colors
    for fgc in {30..37}; do
        # background colors
        for bgc in {40..47}; do
            fgc=${fgc#37} # white
            bgc=${bgc#40} # black
            vals="${fgc:+$fgc;}${bgc}"
            vals=${vals%%;}
            seq0="${vals:+\e[${vals}m}"
            printf "  %-9s" "${seq0:-(default)}"
            printf " ${seq0}TEXT\e[m"
            printf " \e[${vals:+${vals+$vals;}}1mBOLD\e[m"
        done
        echo; echo
    done
}

if [ $PRODACCESS ] ; then
   fji() {
    /google/src/head/depot/google3/tools/java/remove_unused_imports.py "$@" --fix
    /google/src/head/depot/google3/tools/java/sort_java_imports.py "$@"
  }
  alias j='cd $(pwd | sed s!/javatests/!/java/!)'
  alias jt='cd $(pwd | sed s!/java/!/javatests/!)'
  alias alohomora='prodaccess'
  alias opensesame='prodaccess'
  alias mellon='echo "The Doors of Durin, Lord of Moria. Speak, friend, and enter."; prodaccess'
  alias just='blaze'
  alias please='blaze'
  alias goodbye='g4 citc -d $(g4d /..;basename $PWD) && exit'
  alias fu=fileutil
  alias fuls='fileutil ls -lh --sharded'
  alias logreport='/google/data/ro/projects/logs/accesstools/report'
fi
EOF

cat << 'EOF' > ~/.bashrc
# ~/.bashrc: executed by bash(1) for non-login shells.

. "$HOME/.variables"

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
HISTCONTROL=ignoreboth
# append to the history file, don't overwrite it
shopt -s histappend
# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=100000
HISTFILESIZE=200000
# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize
# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar
# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"
# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi
# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color) color_prompt=yes;;
esac
# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
fi

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

# custom stuff
export ANDROID_SDK_HOME=${HOME}/android-sdk-linux
export ANDROID_NDK_HOME=${HOME}/android-ndk-r10e
export PATH=${PATH}:$HOME/bin:${ANDROID_SDK_HOME}/tools:${ANDROID_SDK_HOME}/platform-tools:${ANDROID_NDK_HOME}

function prompt_command {
  TERMWIDTH=${COLUMNS}
  cur_tty=$(tty | sed -e "s/.*tty\(.*\)/\1/")
  newPWD="${PWD}"
  #   Add all the accessories below ...
  let promptsize=$(echo -n "--(${PWD})---(XXXXX)--" \
                   | wc -c | tr -d " ")
  let fillsize=${TERMWIDTH}-${promptsize}
  fill=""
  while [ "$fillsize" -gt "0" ]
  do
    fill="${fill}-"
    let fillsize=${fillsize}-1
  done
  if [ "$fillsize" -lt "0" ] ; then
    let cut=3-${fillsize}
    newPWD="...$(echo -n $PWD | sed -e "s/\(^.\{$cut\}\)\(.*\)/\2/")"
  fi
}

PROMPT_COMMAND=prompt_command
GRAY="\[\033[1;30m\]"
LIGHT_GRAY="\[\033[0;37m\]"
WHITE="\[\033[1;37m\]"
NO_COLOUR="\[\033[0m\]"
LIGHT_BLUE="\[\033[1;34m\]"
YELLOW="\[\033[1;33m\]"
case $TERM in
    xterm*)
        TITLEBAR='\[\033]0;\u@\h:\w\007\]'
        ;;
    *)
        TITLEBAR=""
        ;;
esac
PS1="$TITLEBAR$YELLOW-$LIGHT_BLUE-($WHITE\$newPWD${LIGHT_BLUE})-${YELLOW}-\${fill}${LIGHT_BLUE}-($WHITE\$(date +%H:%M)$LIGHT_BLUE)-$YELLOW-\n$YELLOW\$$NO_COLOUR "
PS2="$LIGHT_BLUE-$YELLOW-$YELLOW-$NO_COLOUR "
EOF
```

<h2>Desktop environment (X11, i3, dunst)</h2>

```bash
cat << 'EOF' > ~/.Xmodmap
keycode 66 = Control_L
clear Lock 
add Control = Control_L
EOF

cat << 'EOF' > ~/.xsession
#!/bin/sh
. "$HOME/.variables"
# necessary to make chrome pick up the proxy settings stored in gconf.
export DESKTOP_SESSION=gnome
# Disable audible bell
xset -b
export GTK_IM_MODULE=xim
# Background color
xsetroot -solid "#333333"
# Start urxvtd
urxvtd -q -f -o
xmodmap .Xmodmap
exec i3
EOF

mkdir -p ~/.config/dunst
cat << 'EOF' > ~/.config/dunst/dunstrc
[global]
    font = "Bitstream Vera Sans" 10
    allow_markup = yes
    format = "<b>%s</b>\n%b"
    sort = yes
    indicate_hidden = yes
    alignment = center
    bounce_freq = 0
    show_age_threshold = 60
    word_wrap = yes
    ignore_newline = no
    geometry = "270x20-10+33"
    transparency = 0
    idle_threshold = 60
    monitor = 0
    follow = mouse
    line_height = 0
    separator_height = 2
    padding = 8
    horizontal_padding = 2
    separator_color = auto
    startup_notification = false
    dmenu = /usr/bin/dmenu -p dunst:
    browser = /usr/bin/google-chrome -new-tab
 
[frame]
    width = 0
    color = "#FFFFFF"
 
[shortcuts]
    close = ctrl+space
    close_all = ctrl+shift+space
    history = ctrl+grave
    context = ctrl+shift+period
 
[urgency_low]
    background = "#D3D3A4"
    foreground = "#404040"
    timeout = 5
 
[urgency_normal]
    background = "#D3D3A4"
    foreground = "#404040"
    timeout = 5
 
[urgency_critical]
    background = "#D8E0E3"
    foreground = "#412F27"
    timeout = 5
EOF

mkdir -p ~/.i3
cat << 'EOF' > ~/.i3/config
set $mod Mod4
font -misc-fixed-medium-r-normal--13-120-75-75-C-70-iso10646-1
floating_modifier $mod
new_window pixel 2
hide_edge_borders both
bindsym $mod+Return exec i3-sensible-terminal
bindsym $mod+l exec "gnome-screensaver-command --lock"
bindsym $mod+Shift+semicolon kill
bindsym $mod+e exec i3-dmenu-desktop
# change focus
bindsym $mod+h focus left
bindsym $mod+t focus down
bindsym $mod+n focus up
bindsym $mod+s focus right
# alternatively, you can use the cursor keys:
bindsym $mod+Left focus left
bindsym $mod+Down focus down
bindsym $mod+Up focus up
bindsym $mod+Right focus right
# move focused window
bindsym $mod+Shift+h move left
bindsym $mod+Shift+t move down
bindsym $mod+Shift+n move up
bindsym $mod+Shift+s move right
# alternatively, you can use the cursor keys:
bindsym $mod+Shift+Left move left
bindsym $mod+Shift+Down move down
bindsym $mod+Shift+Up move up
bindsym $mod+Shift+Right move right
# moving workspaces
bindsym $mod+Ctrl+Shift+Left move workspace to output left
bindsym $mod+Ctrl+Shift+Down move workspace to output down
bindsym $mod+Ctrl+Shift+Up move workspace to output up
bindsym $mod+Ctrl+Shift+Right move workspace to output right
# split in horizontal orientation
bindsym $mod+d split h
# split in vertical orientation
bindsym $mod+k split v
# enter fullscreen mode for the focused container
bindsym $mod+u fullscreen
# change container layout (stacked, tabbed, toggle split)
bindsym $mod+o layout stacking
bindsym $mod+comma layout tabbed
bindsym $mod+period layout toggle split
# toggle tiling / floating
bindsym $mod+Shift+space floating toggle
# change focus between tiling / floating windows
bindsym $mod+space focus mode_toggle
# focus the parent container
bindsym $mod+a focus parent
# focus the child container
#bindsym $mod+d focus child
# switch to workspace
bindsym $mod+ampersand workspace number 1
bindsym $mod+bracketleft workspace number 2
bindsym $mod+braceleft workspace number 3
bindsym $mod+braceright workspace number 4
bindsym $mod+parenleft workspace number 5
bindsym $mod+equal workspace number 6
bindsym $mod+asterisk workspace number 7
bindsym $mod+parenright workspace number 8
bindsym $mod+plus workspace number 9
bindsym $mod+bracketright workspace number 10
# move focused container to workspace
bindsym $mod+Shift+ampersand move container to workspace number 1
bindsym $mod+Shift+bracketleft move container to workspace number 2
bindsym $mod+Shift+braceleft move container to workspace number 3
bindsym $mod+Shift+braceright move container to workspace number 4
bindsym $mod+Shift+1 move container to workspace number 5
bindsym $mod+Shift+equal move container to workspace number 6
bindsym $mod+Shift+asterisk move container to workspace number 7
bindsym $mod+Shift+2 move container to workspace number 8
bindsym $mod+Shift+plus move container to workspace number 9
bindsym $mod+Shift+bracketright move container to workspace number 10
# reload the configuration file
bindsym $mod+Shift+j reload
# restart i3 inplace (preserves your layout/session, can be used to upgrade i3)
bindsym $mod+Shift+p restart
# exit i3 (logs you out of your X session)
bindsym $mod+Shift+period exec "i3-nagbar -t warning -m 'You pressed the exit shortcut. Do you really want to exit i3? This will end your X session.' -b 'Yes, exit i3' 'i3-msg exit'"
bindsym $mod+r exec i3-input -F 'rename workspace to "%s"' -P 'New name: '
# resize window (you can also use the mouse for that)
mode "resize" {
        # These bindings trigger as soon as you enter the resize mode
        # Pressing left will shrink the window’s width.
        # Pressing right will grow the window’s width.
        # Pressing up will shrink the window’s height.
        # Pressing down will grow the window’s height.
        bindsym h resize shrink width 10 px or 10 ppt
        bindsym t resize grow height 10 px or 10 ppt
        bindsym n resize shrink height 10 px or 10 ppt
        bindsym s resize grow width 10 px or 10 ppt
        # same bindings, but for the arrow keys
        bindsym Left resize shrink width 10 px or 10 ppt
        bindsym Down resize grow height 10 px or 10 ppt
        bindsym Up resize shrink height 10 px or 10 ppt
        bindsym Right resize grow width 10 px or 10 ppt
        # back to normal: Enter or Escape
        bindsym Return mode "default"
        bindsym Escape mode "default"
}
bindsym $mod+p mode "resize"

# Pulse Audio controls
bindsym XF86AudioRaiseVolume exec --no-startup-id pactl -- set-sink-volume 0 +5% #increase sound volume
bindsym XF86AudioLowerVolume exec --no-startup-id pactl -- set-sink-volume 0 -5% #decrease sound volume
bindsym XF86AudioMute exec --no-startup-id pactl -- set-sink-mute 0 toggle # mute sound

# Sreen brightness controls
bindsym XF86MonBrightnessUp exec xbacklight -inc 20 # increase screen brightness
bindsym XF86MonBrightnessDown exec xbacklight -dec 20 # decrease screen brightness

# Start i3bar to display a workspace bar (plus the system information i3status
# finds out, if available)
bar {
        status_command i3status
}

exec --no-startup-id nm-applet
exec --no-startup-id blueman-applet
exec --no-startup-id dunst
EOF
```
