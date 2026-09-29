BRIGHTSTART ENGLISH TUTORING

BrightStart English Tutoring is a web-based tutoring platform designed for
Grade 1–3 learners. The system allows parents/guardians to register learners,
book tutoring sessions, submit proof of payment, and monitor learner progress.

Tutors can view registered learners and update learner progress, while the
Administrator manages bookings, payments, learners, and progress.



TECHNOLOGIES USED
=========================================================

Frontend:
- HTML
- CSS
- JavaScript

Backend Services:
- Supabase
- Supabase Authentication
- PostgreSQL Database
- Supabase Storage
- Row Level Security (RLS)

Development Tools:
- Visual Studio Code
- Git
- GitHub

Deployment:
- Vercel



HOW TO RUN THE PROJECT LOCALLY
=========================================================

1. Open the BrightStart/frontend folder in Visual Studio Code.

2. Run index.html using Live Server.

3. The application will connect to the configured Supabase backend.

4. An internet connection is required for authentication, database operations,
   and payment proof uploads.



USER ROLES
=========================================================

1. PARENT / GUARDIAN

Parents/Guardians can:

- Register an account.
- Verify their email address before signing in.
- Sign in using Supabase Authentication.
- View their Parent Dashboard.
- View available tutoring programs.
- Book tutoring sessions.
- View their bookings.
- Submit proof of payment.
- Track booking and payment status.
- View their child's learning progress.
- Contact BrightStart.


2. TUTOR

Tutors have individual staff accounts created by the Administrator.

Tutors can:

- Sign in using their individual Supabase Authentication account.
- Access the Tutor Portal.
- View registered learners.
- Record and update learner progress.
- Add tutor feedback.

Tutors cannot access Administrator-only functionality such as the Admin
Dashboard, Bookings Management, or Payment Verification.


3. ADMINISTRATOR

The Administrator has an individual Supabase Authentication account.

The Administrator can:

- Access the Admin Dashboard.
- View and manage bookings.
- View submitted payment proofs and payment records.
- Verify or reject payments.
- View registered learners.
- View and update learner progress.
- Monitor system activity through dashboard statistics.



BACKEND AND DATABASE
=========================================================

BrightStart uses Supabase as its Backend-as-a-Service (BaaS).

The frontend communicates with Supabase using the Supabase JavaScript client.

The main database tables are:

- parents
- bookings
- payments
- progress
- staff

Supabase Authentication manages user login accounts.

The staff table connects staff profiles to Supabase Authentication accounts
using the authenticated user's UUID. Staff members are assigned roles such as:

- admin
- tutor

Role-based access is used to determine which parts of the system each staff
member can access.



PARENT REGISTRATION AND EMAIL VERIFICATION
=========================================================

Parent registration uses Supabase Authentication.

During registration, the parent provides:

- Parent first name
- Parent surname
- Email address
- Phone number
- Child first name
- Child surname
- Child gender
- Child grade
- Password

A verification email is sent to the parent.

The parent must verify their email address before using their account.

After successful verification and login, the parent profile is created and
linked to the registered email address.



BOOKING AND PAYMENT PROCESS
=========================================================

The booking process works as follows:

1. The Parent signs in.
2. The Parent selects a tutoring program.
3. The Parent selects a booking date and time.
4. The booking is saved in Supabase.
5. The Parent submits proof of payment.
6. The proof file is uploaded to Supabase Storage.
7. A payment record is created in the database.
8. The payment status becomes "Pending Verification".
9. The Administrator reviews the payment.
10. When verified, the booking status becomes "Confirmed".
11. The Parent can view the updated booking and payment status.



LEARNER PROGRESS
=========================================================

Tutors and the Administrator can record learner progress for:

- Reading
- Writing
- Comprehension
- Speaking

Tutor feedback can also be recorded.

Progress information is stored in Supabase and displayed to the appropriate
Parent/Guardian through the "My Child's Progress" page.



PAYMENT PROOF STORAGE
=========================================================

Payment proof files are uploaded to the private Supabase Storage bucket:

payment-proofs

Authenticated users can upload payment proof files.

The database stores the storage path together with the corresponding payment
and booking information.



ROLE-BASED ACCESS
=========================================================

BrightStart separates access according to user role.

Parent:
- Parent Portal only

Tutor:
- Learners
- Progress

Administrator:
- Dashboard
- Bookings
- Payments
- Learners
- Progress

Protected pages check the current user's role before allowing access.

For example, a Tutor attempting to access an Administrator-only page is
redirected to the login page.



SECURITY
=========================================================

BrightStart currently uses:

- Supabase Authentication
- Email verification for Parent accounts
- Individual staff authentication accounts
- Role-based staff access
- Row Level Security (RLS)
- Authenticated payment proof uploads
- Private Supabase Storage
- Supabase session logout

Passwords are handled by Supabase Authentication and are not stored directly
in the BrightStart application code.

The Supabase publishable key used by the frontend is not a service-role key.
Sensitive administrative credentials must never be stored in frontend code.



DEPLOYMENT
=========================================================

The project source code is stored in GitHub.

The main branch is automatically deployed through Vercel.

Supabase provides the hosted database, authentication, storage, and backend
services used by the deployed application.



CURRENT SYSTEM FLOW
=========================================================

Parent Registration
        ↓
Email Verification
        ↓
Parent Login
        ↓
Book Tutoring Session
        ↓
Submit Payment Proof
        ↓
Administrator Verifies Payment
        ↓
Booking Confirmed
        ↓
Tutor Updates Learner Progress
        ↓
Parent Views Learner Progress



FUTURE IMPROVEMENTS
=========================================================

Future improvements may include:

- Support for multiple children under one Parent/Guardian account.
- Additional Tutor management functionality.
- Improved payment proof viewing for administrators.
- Stronger production-level Row Level Security policies.
- Staff invitation and password-management functionality.
- Email notifications for booking and payment updates.
- Additional reporting and analytics.



IMPORTANT SECURITY NOTE
=========================================================

BrightStart is currently developed as an academic project and demonstration
system.

Production deployment would require additional security review, more
restrictive database policies, improved staff account administration, and
further validation and error handling.
