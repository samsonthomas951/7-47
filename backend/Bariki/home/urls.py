from django.urls import path
from . import views

urlpatterns = [
    # path('', views.getRoutes, name="routes"),
    # path('conversation/<int:conversation_id>/', views.conversation_view, name='conversation'),
    # path('conversations/',views.get_conversations, name='conversations')
    path('process-input/', views.process_input, name='process_input'),
    path('process-mpesa/', views.process_mpesa,name='process_mpesa')
]