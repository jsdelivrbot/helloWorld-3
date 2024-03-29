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
        """Test the api can create a bucketlist"""
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)

    def test_api_can_get_a_bucketlist(self):
        """Test the api can get a bucketlist"""
        bucketlist = Bucketlist.objects.get()
        response = self.client.get(
            reverse('details', kwargs={'pk': bucketlist.id}),
            format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, bucketlist)

    def test_api_can_update_bucketlist(self):
        """Test the api can update a given bucketlist."""
        bucketlist = Bucketlist.objects.get()
        change_bucketlist = {'name': 'Something new'}
        res = self.client.put(
            reverse('details', kwargs={'pk': bucketlist.id}),
            change_bucketlist, format='json'
        )
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_api_can_delete_bucketlist(self):
        """Test the api can delete a bucketlist."""
        bucketlist = Bucketlist.objects.get()
        response = self.client.delete(
            reverse('details', kwargs={'pk': bucketlist.id}),
            format='json',
            follow=True)

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
