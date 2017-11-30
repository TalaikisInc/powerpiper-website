from datetime import datetime

from django.test import TestCase

from .models import Post, Category


class PostTestCase(TestCase):
    def setUp(self):
        cat_id1 = Category.objects.create(title="ĖĖŠcategory")
        cat_id2 = Category.objects.create(title="𝌆")
        Post.objects.create(title="Ąpost", category=cat_id2, content="<h1>^&$^*Į</h1>Ėff", date=datetime.now())

    def test_unicode(self):
        """Animals that can speak are correctly identified"""

        post = Post.objects.get(title="Ąpost")
        self.assertEqual(post.title, "Ąpost")
        self.assertEqual(post.content, "<h1>^&$^*Į</h1>Ėff")
        
        cat = Category.objects.get(title="ĖĖŠcategory")
        self.assertEqual(cat.title, "ĖĖŠcategory")

        cat = Category.objects.get(title="𝌆")
        self.assertEqual(cat.title, "𝌆")
    
    def test_post_belongs_to_right_cat(self):
        cat = Category.objects.get(title="ĖĖŠcategory")
        posts = Post.objects.filter(category=cat)
        for post in posts:
            self.assertEqual(post.category, cat.id)

    def test_image(self):
        #ensure image is shown correctly publicly
        pass

    def test_date(self):
        pass
