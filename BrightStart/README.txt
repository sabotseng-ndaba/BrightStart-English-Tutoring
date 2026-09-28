BRIGHTSTART FRONTEND V2

1. Open the BrightStart/frontend folder in VS Code.
2. Run index.html with Live Server.
3. Parent: register a new account first. Registration captures parent + child name, surname, gender and grade.
4. Tutor/Admin demo login:
   Email: amanda.jacobs@brightstartenglish.co.za
   Password: Aobs

Prototype behaviour:
- Parent data, bookings, progress and notifications use browser localStorage so the complete flow can be demonstrated without a backend.
- Payment proof upload stores the selected FILE NAME only in this frontend prototype. Supabase Storage will store the real file in the deployed version.
- When Admin verifies/rejects payment, an in-app parent notification is created. Supabase can later support persistent notifications/email.
- WhatsApp links open wa.me with a prefilled message.
- Desktop uses side navigation; mobile collapses it behind a hamburger.
- Public index has no hamburger and no notification icon.

IMPORTANT SECURITY NOTE
The requested name-derived Tutor/Admin password pattern is implemented only as a DEMO credential. Do not use predictable name-derived passwords in production. When Supabase Auth is connected, use strong unique passwords and role-based authorization.
