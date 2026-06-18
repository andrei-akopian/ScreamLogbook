// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="introduction.html"><strong aria-hidden="true">1.</strong> Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="sentiment_analysis.html"><strong aria-hidden="true">2.</strong> Sentiment Analysis</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="webrequests.html"><strong aria-hidden="true">3.</strong> Web Requests and Scrapping</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="php.html"><strong aria-hidden="true">4.</strong> PHP</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tales.html"><strong aria-hidden="true">5.</strong> Stories</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="list-of-algorithms.html"><strong aria-hidden="true">6.</strong> List of Cool Algorithms</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python-cli.html"><strong aria-hidden="true">7.</strong> Python CLI Libraries</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="git/index.html"><strong aria-hidden="true">8.</strong> Git</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="git/worktree.html"><strong aria-hidden="true">8.1.</strong> Git Worktree</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="git/git-profiles.html"><strong aria-hidden="true">8.2.</strong> Git Profiles</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="git/git-hooks.html"><strong aria-hidden="true">8.3.</strong> Git Hooks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="git/gitignore.html"><strong aria-hidden="true">8.4.</strong> Git Ignore</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="git/readme-style-guide.html"><strong aria-hidden="true">8.5.</strong> README Style Guide</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="git/readme-template.html"><strong aria-hidden="true">8.6.</strong> README Template</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="dealing_with_secrets.html"><strong aria-hidden="true">9.</strong> Dealing with Secrets</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="android-termux.html"><strong aria-hidden="true">10.</strong> Android and Termux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/python.html"><strong aria-hidden="true">11.</strong> Python</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/data_management/managing_data.html"><strong aria-hidden="true">11.1.</strong> Managing Data</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/data_management/hdf5.html"><strong aria-hidden="true">11.1.1.</strong> hdf5 &amp; h5py</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/plotting/index.html"><strong aria-hidden="true">11.2.</strong> Plotting</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/plotting/axfig.html"><strong aria-hidden="true">11.2.1.</strong> matplotlib ax &amp; fig</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/printing_in_python.html"><strong aria-hidden="true">11.3.</strong> Printing in Python</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/gmail-python.html"><strong aria-hidden="true">11.4.</strong> Gmail with Python</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/flask.html"><strong aria-hidden="true">11.5.</strong> Flask (Python)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/python_gui_libraries/python_gui_libraries.html"><strong aria-hidden="true">11.6.</strong> Python GUI Libraries</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/python_gui_libraries/DearPyGui.html"><strong aria-hidden="true">11.6.1.</strong> DearPyGui</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/python_gui_libraries/python-android.html"><strong aria-hidden="true">11.6.2.</strong> Android</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/document_operations/index.html"><strong aria-hidden="true">11.7.</strong> Document Operations</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/document_operations/epub.html"><strong aria-hidden="true">11.7.1.</strong> epub</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/document_operations/pdf.html"><strong aria-hidden="true">11.7.2.</strong> pdf</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/notebooks/quarto.html"><strong aria-hidden="true">11.8.</strong> Notebooks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/ml/index.html"><strong aria-hidden="true">11.9.</strong> Machine Learning</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/ml/torch.html"><strong aria-hidden="true">11.9.1.</strong> Torch</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/ml/wandb.html"><strong aria-hidden="true">11.9.2.</strong> wandb</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/ml/hydra.html"><strong aria-hidden="true">11.9.3.</strong> Hydra</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/linters.html"><strong aria-hidden="true">11.10.</strong> Linters</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/logging.html"><strong aria-hidden="true">11.11.</strong> Logging</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/manim.html"><strong aria-hidden="true">11.12.</strong> Manim</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/mamba.html"><strong aria-hidden="true">11.13.</strong> Mamba</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/common-libs.html"><strong aria-hidden="true">11.14.</strong> Common Libs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/relative_imports.html"><strong aria-hidden="true">11.15.</strong> Relative Imports</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="python/bs4.html"><strong aria-hidden="true">11.16.</strong> BS4 (Scraping)</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="compiling_c_projects.html"><strong aria-hidden="true">12.</strong> Getting Stuff to Run</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/littlejs.html"><strong aria-hidden="true">12.1.</strong> LittleJS</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/lynx.html"><strong aria-hidden="true">12.2.</strong> Lynx Browser</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/w3m.html"><strong aria-hidden="true">12.3.</strong> w3m</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/elinks.html"><strong aria-hidden="true">12.4.</strong> elinks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/browsh.html"><strong aria-hidden="true">12.5.</strong> Browsh</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/optar.html"><strong aria-hidden="true">12.6.</strong> OPTical ARchiver</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/dragon.html"><strong aria-hidden="true">12.7.</strong> Dragon (drag-and-drop tool)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/random_libraries/random_libraries.html"><strong aria-hidden="true">12.8.</strong> Random Libraries</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/random_libraries/tre.html"><strong aria-hidden="true">12.8.1.</strong> tre (Regex)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/random_libraries/libpng.html"><strong aria-hidden="true">12.8.2.</strong> libpng</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/random_libraries/ect.html"><strong aria-hidden="true">12.8.3.</strong> ect</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/data-hoarding/data-hoarding.html"><strong aria-hidden="true">12.9.</strong> Data Hoarding</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/data-hoarding/grab-site.html"><strong aria-hidden="true">12.9.1.</strong> grab-site</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/windows_os.html"><strong aria-hidden="true">12.10.</strong> Windows</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cpp/cpp.html"><strong aria-hidden="true">13.</strong> C++</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cpp/file-io.html"><strong aria-hidden="true">13.1.</strong> FileIO</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="javascript/javascript.html"><strong aria-hidden="true">14.</strong> Javascript</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="javascript/vue/vue.html"><strong aria-hidden="true">14.1.</strong> Vue</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="javascript/canvas.html"><strong aria-hidden="true">14.2.</strong> Canvas</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="javascript/qrcodejs.html"><strong aria-hidden="true">14.3.</strong> QR Code JS</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="javascript/pixijs.html"><strong aria-hidden="true">14.4.</strong> PixiJS</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="javascript/math.html"><strong aria-hidden="true">14.5.</strong> Math</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="javascript/firefox_extensions/setup.html"><strong aria-hidden="true">14.6.</strong> Firefox Extensions</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="javascript/firefox_extensions/popup.html"><strong aria-hidden="true">14.6.1.</strong> Popup</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="javascript/threejs.html"><strong aria-hidden="true">14.7.</strong> THREE.js</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="javascript/excaliburjs.html"><strong aria-hidden="true">14.8.</strong> Excalibur.js</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="javascript/scrapping.html"><strong aria-hidden="true">14.9.</strong> Scrapping</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="w3/index.html"><strong aria-hidden="true">15.</strong> W3</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="w3/html_boilerplate.html"><strong aria-hidden="true">15.1.</strong> HTML Boilerplate</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="w3/site_quality_checkers.html"><strong aria-hidden="true">15.2.</strong> Validators</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="markdown/markdown.html"><strong aria-hidden="true">16.</strong> Markdown</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="markdown/to_html.html"><strong aria-hidden="true">16.1.</strong> Markdown to HTML</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="markdown/to_presentation.html"><strong aria-hidden="true">16.2.</strong> md to Presentation</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="rust/index.html"><strong aria-hidden="true">17.</strong> Rust</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="rust/iced.html"><strong aria-hidden="true">17.1.</strong> Iced GUI Library</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="rust/compiling_with_cargo.html"><strong aria-hidden="true">17.2.</strong> Compiling with Cargo</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="c/index.html"><strong aria-hidden="true">18.</strong> C</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="c/compile_libraries.html"><strong aria-hidden="true">18.1.</strong> Compiling Libraries</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="c/sdl.html"><strong aria-hidden="true">18.2.</strong> SDL</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="c/io.html"><strong aria-hidden="true">18.3.</strong> IO</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="latex/latex.html"><strong aria-hidden="true">19.</strong> LaTeX</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="working_with_file_system_in_python.html"><strong aria-hidden="true">20.</strong> Working with File System in Python</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="shebang.html"><strong aria-hidden="true">21.</strong> Shebang</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="ruby.html"><strong aria-hidden="true">22.</strong> Ruby</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="profiling_zshrc.html"><strong aria-hidden="true">23.</strong> Profiling .zshrc</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="diagnosing/index.html"><strong aria-hidden="true">24.</strong> Diagnosing</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="diagnosing/file-sizes.html"><strong aria-hidden="true">24.1.</strong> file sizes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="diagnosing/linux-network.html"><strong aria-hidden="true">24.2.</strong> linux network settings</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vm/index.html"><strong aria-hidden="true">25.</strong> VMs</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vm/docker.html"><strong aria-hidden="true">25.1.</strong> Docker</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vm/vms-on-macos.html"><strong aria-hidden="true">25.2.</strong> VMs on MacOS</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="test_files.html"><strong aria-hidden="true">26.</strong> Test Files</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="svg.html"><strong aria-hidden="true">27.</strong> SVG</a></span></li><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="404.html"><strong aria-hidden="true">28.</strong> 404</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="browser-automation/index.html"><strong aria-hidden="true">29.</strong> Browser Automation</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="browser-automation/playwright.html"><strong aria-hidden="true">29.1.</strong> Playwright</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="browser-automation/puppeteer.html"><strong aria-hidden="true">29.2.</strong> Puppeteer</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="cimg.html"><strong aria-hidden="true">30.</strong> cimg</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="clojure/clojure.html"><strong aria-hidden="true">31.</strong> Clojure</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="clojure/basic_operations.html"><strong aria-hidden="true">31.1.</strong> Clojure Basics</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="excel.html"><strong aria-hidden="true">32.</strong> excel.md</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="fun_with_terminals.html"><strong aria-hidden="true">33.</strong> Fun with Terminals</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/embarcadero.html"><strong aria-hidden="true">34.</strong> Embracadero</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/paperbak.html"><strong aria-hidden="true">35.</strong> Paperbak</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-stuff-to-run/qr-backup.html"><strong aria-hidden="true">36.</strong> QR Backup</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="zig/index.html"><strong aria-hidden="true">37.</strong> Zig</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="zig/allocators.html"><strong aria-hidden="true">37.1.</strong> Allocators</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="zig/c_interop.html"><strong aria-hidden="true">37.2.</strong> C Interop</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="zig/compiletime.html"><strong aria-hidden="true">37.3.</strong> CompileTime</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="zig/lists.html"><strong aria-hidden="true">37.4.</strong> Lists</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="zig/math.html"><strong aria-hidden="true">37.5.</strong> Math</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="zig/io.html"><strong aria-hidden="true">37.6.</strong> IO</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

