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
