# SpecialWebApp
Personal Attempt at making a web app for learning purposes.
routes:
/createstudent
    Creates a new student entry. Requires Authentication.
    Expects JSON body: {"id": "student_id", "name": "student_name"}
/cp/set
    Sets the civ point count for a specific student.
    Administrative override. Requires Authentication.
    Expects JSON body: {"id": "student_id", "points": 100}
/cp/add
    Adds civ points to a student. Requires Authentication.
    Expects JSON body: {"id": "student_id", "points": 10, "reason": "went to hq on time wow"}
/cp/deduct
    Deducts civ points from a student. Requires Authentication.
    Expects JSON body: {"id": "student_id", "points": 5, "reason": "this person lost a computer in the couch"}
/cp/transfer
    Transfers civ points from one student to another.
    Does NOT require admin auth
    Hard limit of 50 points per transfer.
	Don’t use this route for now.
/removestudent
/get/
    Gets all students with their ID, name, civ points, and log.
Readonly, does not require staff authentication.
/get/<string:student_id>
    Gets all data for a specific student ID.
what it will return for this route only: (this is not the beautiful version so it is harder to read)
{"civ_points":-4453,"id":"456789","log":[{"change":-7616,"reason":"1oz Rand Gold Bar (.9999 Purity)","timestamp":"2025-09-20T14:21:40.533794+00:00"},{"change":21,"reason":"Funny number","timestamp":"2025-09-20T14:22:07.480530+00:00"},{"change":11,"reason":"Active Service","timestamp":"2025-09-24T19:10:09.750261+00:00"},{"change":10,"reason":"Jessup","timestamp":"2025-09-24T19:50:35.664070+00:00"},{"change":100,"reason":"Jessup1","timestamp":"2025-09-24T19:54:03.859473+00:00"},{"change":21,"reason":"Test","timestamp":"2025-09-30T18:48:02.645028+00:00"},{"change":3000,"reason":"Test","timestamp":"2025-12-01T17:57:44.756146+00:00"}],"name":"Cool Person"}

