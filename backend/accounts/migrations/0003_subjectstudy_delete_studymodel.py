# Generated by Django 5.2.1 on 2025-05-24 10:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_studymodel'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubjectStudy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subject', models.CharField(max_length=100, verbose_name='科目')),
                ('study_time', models.IntegerField(verbose_name='勉強時間（分）')),
                ('study_content', models.TextField(verbose_name='勉強内容')),
                ('study_date', models.DateField(verbose_name='勉強日')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='作成日時')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='更新日時')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.simpleuser')),
            ],
            options={
                'ordering': ['-study_date'],
            },
        ),
        migrations.DeleteModel(
            name='Studymodel',
        ),
    ]
