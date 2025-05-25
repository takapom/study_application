# accounts/models.py
from django.db import models

class SimpleUser(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.email

#勉強時間のモデル定義
class SubjectStudy(models.Model):
    user = models.ForeignKey(SimpleUser, on_delete=models.CASCADE)
    subject = models.CharField("科目", max_length=100)
    study_time = models.IntegerField("勉強時間（分）")
    study_content = models.TextField("勉強内容")
    study_date = models.DateField("勉強日")
    created_at = models.DateTimeField("作成日時", auto_now_add=True)
    updated_at = models.DateTimeField("更新日時", auto_now=True)

    def __str__(self):
        return f"{self.user.email}の{self.subject}の勉強記録"

    class Meta:
        ordering = ['-study_date']
