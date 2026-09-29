const SUPABASE_URL = "https://xcrtljpdrvxxfsntucja.supabase.co";
const SUPABASE_KEY = "sb_publishable_gSt7M5D1YZAUDL3toX_npg_foUmp_m6";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

/* =========================================================
   BRIGHTSTART - MAIN APPLICATION JAVASCRIPT
========================================================= */
/* =========================
   HELPERS
========================= */

const $ = (selector, root = document) =>
    root.querySelector(selector);

const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];


/* =========================
   LOCAL STORAGE
========================= */

const store = {

    get: (key, defaultValue = null) =>
        JSON.parse(
            localStorage.getItem(key) ||
            JSON.stringify(defaultValue)
        ),

    set: (key, value) =>
        localStorage.setItem(
            key,
            JSON.stringify(value)
        )
};


/* =========================
   DEFAULT DATA
========================= */



/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const sidebar = $('.sidebar');
    const overlay = $('.mobile-overlay');

    if (sidebar) {

        sidebar.classList.toggle('open');

        overlay?.classList.toggle('show');
    }
}


/* =========================
   LOGOUT
========================= */

async function logout() {

    const { error } =
        await supabaseClient.auth.signOut();

    if (error) {
        console.error(
            'Supabase logout error:',
            error
        );
    }

    localStorage.removeItem('bs_session');

    location.href = '../login.html';
}

/* =========================
   LOGIN GUARDS
========================= */

function parentGuard() {

    const currentSession = store.get('bs_session');

    if (
        !currentSession ||
        currentSession.role !== 'parent'
    ) {
        location.href = '../login.html';
    }
}


function adminGuard() {

    const currentSession = store.get('bs_session');

    if (
        !currentSession ||
        currentSession.role !== 'admin'
    ) {
        location.href = '../login.html';
    }
}
function staffGuard() {

    const currentSession = store.get('bs_session');

    if (
        !currentSession ||
        !['admin', 'tutor'].includes(currentSession.role)
    ) {
        location.href = '../login.html';
    }
}

/* =========================
   CURRENT SESSION
========================= */

function session() {

    return store.get(
        'bs_session',
        {}
    );
}


/* =========================================================
   SVG ICONS
========================================================= */

function icon(name) {

    const icons = {


        /* DASHBOARD */

        dashboard: `
            <svg viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">

                <path d="M3 11L12 4L21 11"></path>

                <path d="M5 10V20H19V10"></path>

                <path d="M9 20V14H15V20"></path>

            </svg>
        `,


        /* PROGRAMS */

        programs: `
            <svg viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">

                <path d="M2 4H8A4 4 0 0 1 12 8V20
                         A4 4 0 0 0 8 16H2Z"></path>

                <path d="M22 4H16A4 4 0 0 0 12 8V20
                         A4 4 0 0 1 16 16H22Z"></path>

            </svg>
        `,


        /* BOOK A SESSION */

        bookSession: `
            <svg viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">

                <rect
                    x="3"
                    y="5"
                    width="18"
                    height="16"
                    rx="2">
                </rect>

                <path d="M16 3V7"></path>
                <path d="M8 3V7"></path>
                <path d="M3 10H21"></path>

                <path d="M12 13V18"></path>
                <path d="M9.5 15.5H14.5"></path>

            </svg>
        `,


        /* MY BOOKINGS */

        bookings: `
            <svg viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">

                <rect
                    x="3"
                    y="5"
                    width="18"
                    height="16"
                    rx="2">
                </rect>

                <path d="M16 3V7"></path>
                <path d="M8 3V7"></path>
                <path d="M3 10H21"></path>

                <path d="M8 15L11 18L17 12"></path>

            </svg>
        `,


        /* PAYMENTS */

        payments: `
            <svg viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">

                <rect
                    x="2"
                    y="5"
                    width="20"
                    height="14"
                    rx="2">
                </rect>

                <path d="M2 10H22"></path>

                <path d="M6 15H10"></path>

            </svg>
        `,


        /* PROGRESS */

        progress: `
            <svg viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">

                <path d="M4 20V14"></path>

                <path d="M10 20V10"></path>

                <path d="M16 20V4"></path>

                <path d="M22 20H2"></path>

            </svg>
        `,


        /* CONTACT */

        contact: `
            <svg viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">

                <circle
                    cx="12"
                    cy="12"
                    r="9">
                </circle>

                <path d="M12 11V16"></path>

                <path d="M12 8H12.01"></path>

            </svg>
        `,


        /* LEARNERS */

        learners: `
            <svg viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">

                <circle
                    cx="12"
                    cy="8"
                    r="4">
                </circle>

                <path d="M4 21
                         A8 8 0 0 1 20 21">
                </path>

            </svg>
        `,


        /* LOGOUT */

        logout: `
            <svg viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">

                <path d="M10 17L15 12L10 7"></path>

                <path d="M15 12H3"></path>

                <path d="M14 3H19
                         A2 2 0 0 1 21 5
                         V19
                         A2 2 0 0 1 19 21
                         H14">
                </path>

            </svg>
        `
    };


    return icons[name] || '';
}


/* =========================================================
   PARENT SIDEBAR
========================================================= */

function parentNav(active = '') {

    return `

        <aside class="sidebar">


            <!-- BRAND -->

            <div class="side-brand">

                <img
                    src="../assets/images/sun-book.png"
                    alt="BrightStart"
                >

                <div>

                    <strong>
                        BrightStart
                    </strong>

                    <div>
                        Parent Portal
                    </div>

                </div>

            </div>


            <!-- NAVIGATION -->

            <nav class="nav">


                <a
                    class="${active === 'dashboard' ? 'active' : ''}"
                    href="dashboard.html"
                >

                    ${icon('dashboard')}

                    <span>
                        Dashboard
                    </span>

                </a>


                <a
                    class="${active === 'programs' ? 'active' : ''}"
                    href="programs.html"
                >

                    ${icon('programs')}

                    <span>
                        Programs
                    </span>

                </a>


                <a
                    class="${active === 'booking' ? 'active' : ''}"
                    href="booking.html"
                >

                    ${icon('bookSession')}

                    <span>
                        Book a Session
                    </span>

                </a>


                <a
                    class="${active === 'bookings' ? 'active' : ''}"
                    href="bookings.html"
                >

                    ${icon('bookings')}

                    <span>
                        My Bookings
                    </span>

                </a>


                <a
                    class="${active === 'payments' ? 'active' : ''}"
                    href="payments.html"
                >

                    ${icon('payments')}

                    <span>
                        Payments
                    </span>

                </a>


                <a
                    class="${active === 'progress' ? 'active' : ''}"
                    href="progress.html"
                >

                    ${icon('progress')}

                    <span>
                        My Child's Progress
                    </span>

                </a>


                <a
                    class="${active === 'contact' ? 'active' : ''}"
                    href="contact.html"
                >

                    ${icon('contact')}

                    <span>
                        Contact / About
                    </span>

                </a>


            </nav>


            <!-- LOGOUT -->

            <button
                class="btn logout"
                onclick="logout()"
            >

                ${icon('logout')}

                <span>
                    Logout
                </span>

            </button>


        </aside>
    `;
}


/* =========================================================
   ADMIN / TUTOR SIDEBAR
========================================================= */

function adminNav(active = '') {

    const currentSession = store.get('bs_session');
    const isAdmin = currentSession?.role === 'admin';

    return `

        <aside class="sidebar">


            <!-- STAFF BRAND -->

            <div class="side-brand">

                <img
                    class="admin-logo"
                    src="../assets/images/logo.png"
                    alt="BrightStart"
                >

                <div>

                    <strong>
                        BrightStart
                    </strong>

                    <div>
                        ${isAdmin
                            ? 'Admin Portal'
                            : 'Tutor Portal'}
                    </div>

                </div>

            </div>


            <!-- STAFF NAVIGATION -->

            <nav class="nav">


                ${isAdmin ? `

                    <a
                        class="${active === 'dashboard' ? 'active' : ''}"
                        href="dashboard.html"
                    >

                        ${icon('dashboard')}

                        <span>
                            Dashboard
                        </span>

                    </a>


                    <a
                        class="${active === 'bookings' ? 'active' : ''}"
                        href="bookings.html"
                    >

                        ${icon('bookings')}

                        <span>
                            Bookings
                        </span>

                    </a>


                    <a
                        class="${active === 'payments' ? 'active' : ''}"
                        href="payments.html"
                    >

                        ${icon('payments')}

                        <span>
                            Payments
                        </span>

                    </a>

                ` : ''}


                <a
                    class="${active === 'learners' ? 'active' : ''}"
                    href="learners.html"
                >

                    ${icon('learners')}

                    <span>
                        Learners
                    </span>

                </a>


                <a
                    class="${active === 'progress' ? 'active' : ''}"
                    href="progress.html"
                >

                    ${icon('progress')}

                    <span>
                        Progress
                    </span>

                </a>


            </nav>


            <!-- LOGOUT -->

            <button
                class="btn logout"
                onclick="logout()"
            >

                ${icon('logout')}

                <span>
                    Logout
                </span>

            </button>


        </aside>
    `;
}

                    
                
/* =========================================================
   PAGE SHELL
========================================================= */

function shell(
    role,
    active,
    title,
    body
) {

    document.body.innerHTML = `

        <div class="
            app-shell
            ${role === 'admin'
            ? 'admin-accent'
            : ''}
        ">


            ${role === 'admin'
            ? adminNav(active)
            : parentNav(active)
        }


            <!-- MOBILE OVERLAY -->

            <div
                class="mobile-overlay"
                onclick="toggleMenu()">
            </div>


            <!-- MAIN AREA -->

            <main class="main">


                <!-- TOP BAR -->

                <header class="topbar">

                    <button
                        class="hamburger"
                        onclick="toggleMenu()"
                        aria-label="Open menu"
                    >
                        ☰
                    </button>


                    <strong>
                        ${title}
                    </strong>


                    <span>

                        ${role === 'parent'
            ? session().parentName || 'Parent'
            : session().name || 'Tutor/Admin'
        }

                    </span>

                </header>


                <!-- PAGE CONTENT -->

                <section class="page">

                    ${body}

                </section>


            </main>


        </div>
    `;
}


