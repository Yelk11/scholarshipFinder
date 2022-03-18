
import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("DataEntry/scholarshipfinder-fb492-firebase-adminsdk-illqy-a6c643e370.json")
firebase_admin.initialize_app(cred)

db = firestore.client()


data = {
    u'amount': 2,
    u'deadline': u'enddate',
    u'opens': u'date',
    u'organization': u'net solutions',
    u'apply_url': u'applylink',
    u'info_url': u'informationlink',

}
#********READ EACH HEADING BELOW********

#***********BASIC SCHOLARSHIP SCRIPT LAYOUT***********
#    u'amount': 2,
#    u'deadline': u'enddate',
#    u'opens': u'date',
#    u'organization': u'net solutions',
#    u'apply_url': u'applylink',
#    u'info_url': u'informationlink',


#*********USE ONLY IF APPLICABLE TO SCHOLARSHIP********
#    u'race': u'B,W,L,NAT_AM, etc',
#    u'citizenship': u'us_citizen, permanent_resident, etc',
#    u'gender': u'M,F,Transgender, rather not say',
#    u'enrollment_status': u'full_time, part_time',
#    u'class_standing': [hs_freshman, hs_sophomore, hs_junior, hs_senior, col_freshman, col_sophomore, col_junior, col_senior],
#    u'degree': u'associate, bachelor, graduate, masters, doctoral, professional, joint,',
#    u'gpa': u'2.0 - 4.0',
#
#    u'login': u't or f',
#    u'topic': u'*see cell C23 in "Scholarship attributes"*',
#    u'file_upload': u't or f',
#
#    u'Military': u't or f'

# **********EXAMPLES SECTION************
#    u'amount': 6400,
#    u'Array': [1,2,3,4,5],
#    u'boolean': 1<0,
#    u'country type': None
# Array needs [] and commas to work
# Boolean needs 1 AND 0, 1 is true and 0 is false
# Timestamp isn't able to work
# Add a new doc in collection 'cities' with ID 'LA'
db.collection(u'scholarships').document(U'TEST 2').set(data)