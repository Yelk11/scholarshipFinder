
import firebase_admin
from firebase_admin import credentials, firestore
import datetime

cred = credentials.Certificate("scholarshipfinder-fb492-firebase-adminsdk-illqy-a6c643e370.json")
firebase_admin.initialize_app(cred)

db = firestore.client()




data = {

    u'title' : u'',
    u'amount' : u'',
    u'deadline' : datetime.datetime.strptime("01/30/22 00:00", "%m/%d/%y %H:%M"),
    u'opens' : u'',
    u'organization' : u'',
    u'apply_url' : u'',
    u'info_url' : u'',
    u'login_required' : 1<0,
    u'topic' : u'',
    u'file_upload' : 1<0,
    u'race' : ['all'], # 'black', 'white', 'asian'
    u'us_citizen' : ['all'], # us_citizen, permanent_resident, international_student, other
    u'sex' : ['male', 'female', 'non-binary'], # male, female, non-binary
    u'college' : ['all'],
    u'high_school' : ['all'],
    u'enrollment_status' : ['all'], # full, part
    u'class_standing' : ['all'], #hs_freshman, hs_sophomore, hs_junior, hs_senior, freshman, sophomore, junior, senior
    u'degree' : ['all'], # ged, associate, bachelor, master, phd
    u'major' : ['all'], # see list of majors 
    u'gpa' : 0, # lowest eligible gpa
    u'military' : ['all'],
    u'athletic_interests' : ['all'],
    u'sat_math' : 0, # lowest eligible score
    u'sat_ebrw' : 0, # lowest eligible score
    u'act' : 0, # lowest eligible score
    u'first_college_student' : ['all'], # first, not_first
    u'income_level' : ['all'], # low, low-mid, middle, mid-high, high

}

# Add a new doc in collection 'scholarship' with auto generated ID
db.collection(u'new_scholarships').document().set(data)

#********READ "Scholarship attributes" SHEETS FOR DETAILS********

# **********EXAMPLES SECTION************
#    u'amount': 6400,
#    u'Array': [1,2,3,4,5],
#    u'boolean': 1<0,
#    u'country type': None
# Array needs [] and commas to work
# Boolean needs 1 AND 0, 1 is true and 0 is false
# Timestamp isn't able to work
