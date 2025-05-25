# accounts/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import SimpleUser, SubjectStudy

class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = SimpleUser.objects.get(email=email, password=password)
            return Response({
                'success': True,
                'user_id': user.id  # ユーザーIDをレスポンスに含める
            })
        except SimpleUser.DoesNotExist:
            return Response({'success': False}, status=401)
        

#ログアウト処理定義
class LogoutView(APIView):
    def post(self, request):
        return Response({'message': 'ログアウトしました'}, status=status.HTTP_200_OK)
    

#ユーザーの勉強情報を表示処理
class UserStudyInfo(APIView):
    def get(self, request):
        #成功した時の処理定義
        try:
            user_id = request.query_params.get('user_id')
            if not user_id:
                return Response(
                    {'error': 'ユーザーIDがないです。'},
                     status=status.HTTP_400_BAD_REQUEST
                )
            study_records = SubjectStudy.objects.filter(user_id=user_id)

            study_date = []
            for record in study_records:
                study_date.append({
                    'id': record.id,
                    'subject': record.subject,
                    'study_time': record.study_time,
                    'study_content': record.study_content,
                    'study_date': record.study_date,
                    'created_at': record.created_at,
                    'updated_at': record.updated_at
                })

            return Response({
                'success': True,
                'study_records': study_date
            }, status=status.HTTP_200_OK)


        except SimpleUser.DoesNotExist:
            return Response(
                {'error': 'ユーザーが見つかりません'}, 
                status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

