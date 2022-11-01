from django.urls import path

from . import views

app_name = 'api'
urlpatterns = [
    path('', views.index, name='index'),
    path('products', views.products, name='products'),
    path('products/<int:id>/', views.a_product, name='a_product'),
    path('categories/', views.categories, name='categories'),
    path('categories/<int:id>/', views.a_category, name='a_category'),
    path('categories/<int:id>/products', views.get_by_category, name='get_by_category'),
]