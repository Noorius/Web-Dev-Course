from django.urls import path

from rest_framework_simplejwt.views import TokenObtainPairView

from . import views

app_name = 'api'
urlpatterns = [
    path('', views.index, name='index'),
    path('companies', views.all_companies, name='all_companies'),
    path('companies/<int:id>/', views.a_company, name='a_company'),
    path('companies/<int:id>/vacancies/', views.get_vacancies, name='get_vacancies'),
    path('vacancies/', views.VacanciesView.as_view(), name='all_vacancies'),
    path('vacancies/<int:id>/', views.A_VacancyView.as_view(), name='a_vacancy'),
    path('vacancies/top_ten/', views.top_ten, name='top_ten'),
    path('login/', TokenObtainPairView.as_view()),
]