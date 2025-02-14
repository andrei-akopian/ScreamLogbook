# Android Termux

Default package manager is `pkg`

But it doesn't work for 99% of stuff, so expect to compile and git clone stuff yourself. Also, superuser is broken unless you have rooted your phone.

## SSH server

SSH = [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell) (encrypted connection to another computers commandline)

[Official docs on Remote Access](https://wiki.termux.com/wiki/Remote_Access).

Doing everything from the computer is 10x easier, so use ssh.

In Termux

0. Install [OpenSSH](https://www.openssh.com/) `pkg install openssh`

1. Host with `sshd` (opens on port 8022)
    1. Warning, you are exposing your phone to the world here.

2. `whoami` should give current user (something like `u0_a123`)

3. Setup password with `passwd` (Remember step 1.1, so don't set defaults)

4. Do whatever you wanted to do.

Last. `pkill sshd` to close

## Hosting stuff

Only real usecase of using a phone for selfhosting, is when you don't have your laptop, but other people for some reason do, and you want your phone to do the heavy lifting.

Figure out IP you will be hosting stuff from:
- Localhost: `127.0.0.1` or `localhost`.
- Local (home network): `ifconfig`
- Public:

[Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted)

What I managed to get running:
<details>
    <summary><a href="https://www.atheos.io/">Atheos</a> Web IDE</summary>
    <div style="margin-left: 3em">
        <p><a href="https://github.com/Atheos/Atheos">Github</a></p>
        <p>Normal install won't work because Termux doesn't like sudo.</p>
        <p>Atheos is written in PHP. So </p>
        <p>Hence <code>git clone https://github.com/Atheos/Atheos</code></p>
        <p><code>cd Atheos</code></p>
        <p><code>php -S [your local ip]:8000</code> (local network php server on port 8000)</p>
        <p>Open [phone's local ip]:8000 in your computer browser and enjoy.</p>
    </div>
</details>

<details>
    <summary><a href="https://jupyterlab.readthedocs.io/en/stable/index.html">JupyterLab</a> Python Notebook</summary>
    <div style="margin-left: 3em">
        <p><a href="https://github.com/jupyterlab/jupyterlab">Github</a></p>
        <p>Given how Termux doesn't like pip, and how JupyterLab + Kernels are generally hard to get working, messing with JupyterLab will likely be futile.</p>
        <p>Try <code>pip3 install jupyterlab</code> at pray that it works.</p>
    </div>
</details>

<details>
    <summary><a href="https://github.com/coder/code-server">VS Code</a></summary>
    <div style="margin-left: 3em">
        <p><a href="https://github.com/coder/code-server">Github</a></p>
        <p>You can do VS Code online at <a href="https://vscode.dev/">vscode.dev</a>, only caviat, you need to pay Github for hosting, or provide your own server.</p>
        <p>At this point, consider signing up for Replit or some other online IDE. But if you are really set on hosting from your phone: they conviniently have <a href="https://coder.com/docs/code-server/termux#installation">a tutorial</a> on their official website. (tldr <code>pkg install code-server</code>)</p>
    </div>
</details>

- No JupyterLab because pip breaks
- No Marimo because pip breaks

## Python

Yes, pip constantly fails to install stuff
