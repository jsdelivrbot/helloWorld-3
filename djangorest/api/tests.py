from django.test import TestCase
from django.core.urlresolvers import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import Bucketlist

class ModelTestCase(TestCase):
    """Test suite for the Bucketlist model"""

    def setUp(self):
        """Define test client"""
        self.bucketlist_name = "Follow TDD principles"
        self.bucketlist = Bucketlist(name=self.bucketlist_name)

    def test_model_can_create_a_bucketlist(self):
        """Test the bucketlist model can create a bucketlist instance"""
        old_count = Bucketlist.objects.count()
        self.bucketlist.save()
        new_count = Bucketlist.objects.count()
        self.assertNotEqual(old_count, new_count)

class ViewTestCase(TestCase):
    """Test suite for the api views"""

    def setUp(self):
        """Define test client"""
        self.client = APIClient()
        self.bucketlist_data = {'name': 'get good'}
        self.response = self.client.post(
            reverse('create'),
            self.bucketlist_data,
            format='json')

    def test_api_can_create_a_bucketlist(self):
        """Test the api has bucket creation capability"""
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)
