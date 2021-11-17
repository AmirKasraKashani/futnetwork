from mongoengine import Document ,IntField ,ListField, StringField, document

class clubs(Document):
    fieldId= IntField(db_field='id', unique=True)
    image= StringField()
    name= StringField()
    league= IntField()
