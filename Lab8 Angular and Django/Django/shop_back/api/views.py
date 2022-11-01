import tokenize

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404
from django.template import loader
from .models import Product, Category

def index(request):
    return render(request, 'api/index.html',locals())

def products(request):
    prods = Product.objects.all()
    '''
    template = loader.get_template('api/products.html')
    context = {
        'prods': prods
    }
    '''
    #return HttpResponse(template.render(context,request))
    return JsonResponse([i.to_json() for i in prods], safe=False)


def a_product(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist as e:
        raise Http404("Product does not exist")
    #return render(request, 'api/a_product.html',{'product':product})
    return JsonResponse(product.to_json())


def categories(request):
    categs = Category.objects.all()
    context = {'categs':categs}
    #return render(request, 'api/categories.html', context) #JsonResponse(categs_json, safe=False)
    return JsonResponse([i.to_json() for i in categs], safe=False)


def a_category(request, id):
    try:
        categ = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return Http404("Category does not exist")
    #return render(request, 'api/a_category.html', {'category' : categ})
    return JsonResponse(categ.to_json())

def get_by_category(request, id):
    try:
        categ = Category.objects.get(id=id)
        products = Product.objects.filter(category=categ.name)
    except Category.DoesNotExist as e:
        return Http404("Category is empty")
    #return render(request, 'api/products.html', {'prods':products})
    return JsonResponse([i.to_json() for i in products], safe=False)

