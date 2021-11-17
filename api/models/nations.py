from mongoengine import Document ,IntField ,ListField, StringField

class nations(Document):
    fieldId= IntField(db_field='id', unique=True)
    image= StringField()
    name= StringField()