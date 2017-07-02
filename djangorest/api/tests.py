from django.test import TestCase
from .models import Bucketlist

class ModelTestCase(TestCase):
    """Test suite for the Bucketlist model"""

    def setUp(self):
        """Define test client"""
        self.bucketlist_name="Follow TDD principles"
        self.bucketlist = Bucketlist(name=self.bucketlist_name)

    def test_model_can_create_a_bucketlist(self):
        """Test the bucketlist model can create a bucketlist instance"""
        old_count = Bucketlist.objects.count()
        self.bucketlist.save()
        new_count = Bucketlist.objects.count()
        self.assertNotEqual(old_count, new_count)
