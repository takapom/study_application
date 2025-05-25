# backend/urls.py
from django.contrib import admin
from django.urls import path
from accounts.views import LoginView, LogoutView, UserStudyInfo

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/', LoginView.as_view()),
    path('api/logout/', LogoutView.as_view()),
    path('api/study-records/', UserStudyInfo.as_view()),
]
