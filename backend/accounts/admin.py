# accounts/admin.py
from django.contrib import admin
from .models import SimpleUser, SubjectStudy

admin.site.register(SimpleUser)

@admin.register(SubjectStudy)
class SubjectStudyAdmin(admin.ModelAdmin):
    list_display = ('user', 'subject', 'study_time', 'study_date', 'created_at')
    list_filter = ('subject', 'study_date')
    search_fields = ('subject', 'study_content')
    date_hierarchy = 'study_date'