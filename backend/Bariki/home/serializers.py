from rest_framework.serializers import ModelSerializer
from .models import Conversation
class conversationSerializer(ModelSerializer):
    class Meta:
        model = Conversation
        fields = '__all__'
            