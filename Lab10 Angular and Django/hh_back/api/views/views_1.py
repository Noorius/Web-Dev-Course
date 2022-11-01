
from django.views.generic import View
from django.shortcuts import render

from rest_framework.decorators import api_view, APIView, permission_classes
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from ..models import Company, Vacancy
from ..serializers import CompanySerializer, VacancySerializer

# Create your views here.

def index(request):
    return render(request, 'api/index.html', locals())

@api_view(['GET', 'POST'])
#@permission_classes([IsAuthenticated])
def all_companies(request):
    #permission_classes = ([IsAuthenticated])

    if request.method == "GET":
        try:
            comp = Company.objects.all()
            serializer = CompanySerializer(comp, many=True)
        except Exception as e:
            return Response({'message': str(e)}, status=404)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = CompanySerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['GET', 'PUT', 'DELETE'])
#@permission_classes([IsAuthenticated])
def a_company(request, id):
    try:
        comp = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return Response({'message': str(e)}, status=400)

    if request.method == "GET":
        serializer = CompanySerializer(comp)
        return Response(serializer.data)
    elif request.method == "PUT":
        serializer = CompanySerializer(instance=comp, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == "DELETE":
        comp.delete()



class VacanciesView(APIView):
    model = Vacancy
    #permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            vac = Vacancy.objects.all()
            serializer = VacancySerializer(vac, many=True)
        except Exception as e:
            return Response({'message': str(e)}, status=404)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class A_VacancyView(APIView):
    model = Vacancy
    #permission_classes = [IsAuthenticated]

    def get(self, request, id):
        vac = Vacancy.objects.get(id=id)
        serializer = VacancySerializer(vac)
        return Response(serializer.data)

    def put(self, request, id):
        vac = Vacancy.objects.get(id=id)
        serializer = VacancySerializer(instance=vac, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, id):
        vac = Vacancy.objects.get(id=id)
        vac.delete()



@api_view()
def get_vacancies(request, id):
    comp = Company.objects.get(id=id)
    vac = comp.vacancies.all() #vac = comp.vacancy_set.all()
    serializer = VacancySerializer(vac, many=True)
    return Response(serializer.data)

@api_view()
def top_ten(request):
    vac = Vacancy.objects.order_by('-salary')
    serializer = VacancySerializer(vac, many=True)
    return Response(serializer.data)





















@api_view()
def range(request, min, max):
    vac = Vacancy.objects.filter(salary__gte=min).filter(salary__lte=max)
    serializer = VacancySerializer(vac, many=True)
    return Response(serializer.data)

