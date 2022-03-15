import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials
cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
  'projectId': '741116047859-ip1605lkg94lh3ve03m3o3jafjla8tsf',
})

db = firestore.client()