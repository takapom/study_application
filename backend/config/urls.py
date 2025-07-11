# backend/urls.py
from django.contrib import admin
from django.urls import path
from accounts.views import LoginView, LogoutView, UserStudyInfo, Dashboard, CreateStudy

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/', LoginView.as_view()),
    path('api/logout/', LogoutView.as_view()),
    path('api/study-records/', UserStudyInfo.as_view()),
    path('api/dashboard-records/',Dashboard.as_view()),
    path('api/create-records/', CreateStudy.as_view()),
]
