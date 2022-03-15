
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("DataEntry/scholarshipfinder-fb492-firebase-adminsdk-illqy-a6c643e370.json")
firebase_admin.initialize_app(cred)

db = firestore.client()


data = {
    u'name': u'Los Angeles',
    u'state': u'CA',
    u'country': u'USA'
}

# Add a new doc in collection 'cities' with ID 'LA'
db.collection(u'cities').document(u'LA').set(data)