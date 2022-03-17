
import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("DataEntry/scholarshipfinder-fb492-firebase-adminsdk-illqy-a6c643e370.json")
firebase_admin.initialize_app(cred)

db = firestore.client()


data = {
    u'title': u'TEST SCHOLARSHIP 2',
    u'state': u'MI',
    u'country': u'USA',
    u'amount': 6400,
    u'Array': [1,2,3,4,5],
    u'boolean': 1<0,
    u'country type': None
}

# Array needs [] and commas to work
# Boolean needs 1 AND 0, 1 is true and 0 is false
# Timestamp isn't able to work
# Add a new doc in collection 'cities' with ID 'LA'
db.collection(u'scholarships').document(U'TEST 2').set(data)