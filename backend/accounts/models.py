# accounts/models.py
from django.db import models

class SimpleUser(models.Model):
    username = models.CharField(max_length=10, default="")
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.username

#勉強時間のモデル定義
class SubjectStudy(models.Model):
    user = models.ForeignKey(SimpleUser, on_delete=models.CASCADE)
    #掲示板ようにusername追加
    username = models.CharField("ユーザー名", max_length=150, editable=False, default="")
    subject = models.CharField("科目", max_length=100)
    study_time = models.IntegerField("勉強時間（分）")
    study_content = models.TextField("勉強内容")
    study_date = models.DateField("勉強日")
    created_at = models.DateTimeField("作成日時", auto_now_add=True)
    updated_at = models.DateTimeField("更新日時", auto_now=True)

    #勉強時間のモデルにもusernameを持たせて掲示板で表示させたいので
    #saveメソッドをオーバーライドしてusernameを上書き
    def save(self, *args, **kwargs):
        #SimpleUserのusernameをSubjectStudeyのusernameとコピーする
        self.username = self.user.username
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user.username}の{self.subject}の勉強記録"

    class Meta:
        ordering = ['-study_date']


