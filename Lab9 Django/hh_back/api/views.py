from django.shortcuts import render
from django.http import HttpResponse, Http404, JsonResponse
from .models import Company, Vacancy

# Create your views here.

def index(request):
    return render(request, 'api/index.html', locals() )

def all_companies(request):
    try:
        comp = Company.objects.all()
    except:
        return HttpResponse("No companies yet")

    #return render(request, 'api/companies.html', {'list': comp} )
    return JsonResponse([i.to_json() for i in comp], safe=False)

def all_vacancies(request):
    try:
        vac = Vacancy.objects.all()
    except:
        return HttpResponse("No vacancies yet")

    #return render(request, 'api/vacancies.html', {'vacancies': vac} )
    return JsonResponse([i.to_json() for i in vac], safe=False)

def a_company(request,id):
    try:
        comp = Company.objects.get(id=id)
    except:
        return HttpResponse("No info about a company")

    #return render(request, 'api/a_company.html', {'company': comp})
    return JsonResponse(comp.to_json())

def a_vacancy(request,id):
    try:
        vac = Vacancy.objects.get(id=id)
    except:
        return HttpResponse("No info about a vacancy")

    #return render(request, 'api/a_vacancy.html', {'vacancy': vac})
    return JsonResponse(vac.to_json())

def get_vacancies(request, id):
    try:
        vac = Vacancy.objects.filter(company=id)
    except:
        return HttpResponse('Company has no vacancies yet')

    #return render(request, 'api/vacancies.html', {'vacancies': vac})
    return JsonResponse([i.to_json() for i in vac], safe=False)

def top_ten(request):
    vac = Vacancy.objects.order_by('-salary')

    #return render(request, 'api/vacancies.html', {'vacancies': vac})
    return JsonResponse([i.to_json() for i in vac], safe=False)
