from django.contrib import admin
from django.contrib.flatpages.models import FlatPage
from django.contrib.flatpages.admin import FlatPageAdmin
from django import forms
from django.db import models

from ckeditor.widgets import CKEditorWidget

from .models import Post, Category


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'parsed')
    list_filter = ('parsed', 'parsed')
    search_fields = ('title', 'slug')


class PostAdminForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = Post
        fields = "__all__"


class PostAdmin(admin.ModelAdmin):
    #list_display = ('title', 'category', 'date', 'image')
    #list_filter = ('category', 'date')
    #search_fields = ('title', 'content')
    #date_hierarchy = 'date'
    form = PostAdminForm


class FlatPageCustom(FlatPageAdmin):
    formfield_overrides = {
        models.TextField: {'widget': CKEditorWidget}
    }


admin.site.register(Category, CategoryAdmin)
admin.site.register(Post, PostAdmin)
admin.site.unregister(FlatPage)
admin.site.register(FlatPage, FlatPageCustom)
