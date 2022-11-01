from rest_framework import serializers

from .models import Company, Vacancy

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField()
    city = serializers.CharField(max_length=100, default="None")
    address = serializers.CharField()

    #vacancies = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    #vacancies = serializers.StringRelatedField(many=True, read_only=True)

    def create(self, validated_data):
        new_company = Company.objects.create(**validated_data)
        return new_company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.description = validated_data.get('description')
        instance.city = validated_data.get('city')
        instance.address = validated_data.get('address')
        instance.save()
        return instance

class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company')
