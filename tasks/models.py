from django.db import models
from django.utils.translation import ugettext as T
from django.db import IntegrityError
from django.template.defaultfilters import slugify


class AutoSlugifyOnSaveModel(models.Model):
    def save(self, *args, **kwargs):
        pk_field_name = self._meta.pk.name
        value_field_name = getattr(self, 'value_field_name', 'title')
        slug_field_name = getattr(self, 'slug_field_name', 'slug')
        max_interations = getattr(self, 'slug_max_iterations', 1000)
        slug_separator = getattr(self, 'slug_separator', '-')

        slug_field = self._meta.get_field(slug_field_name)
        slug_len = slug_field.max_length
        queryset = self.__class__.objects.all()
        current_pk = getattr(self, pk_field_name)

        if current_pk:
            queryset = queryset.exclude(**{pk_field_name: current_pk})

        # setup the original slug, and make sure it is within the allowed length
        slug = slugify(getattr(self, value_field_name)).replace('-', '_')

        if slug_len:
            slug = slug[:slug_len]

        original_slug = slug

        counter = 2
        while queryset.filter(**{slug_field_name: slug}).count() > 0 and counter < max_interations:
            slug = original_slug
            suffix = '%s%s' % (slug_separator, counter)
            if slug_len and len(slug) + len(suffix) > slug_len:
                slug = slug[:slug_len-len(suffix)]
            slug = '%s%s' % (slug, suffix)
            counter += 1

        if counter == max_interations:
            raise IntegrityError('Unable to locate unique slug')

        setattr(self, slug_field.attname, slug)

        super(AutoSlugifyOnSaveModel, self).save(*args, **kwargs)

    class Meta:
        abstract = True


class Category(AutoSlugifyOnSaveModel):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=120, verbose_name=T("Categoery"), db_index=True, unique=True)
    slug = models.CharField(max_length=120, blank=True, null=True)
    parsed = models.BooleanField(default=0, verbose_name=T("Parsed status"))

    class Meta:
        ordering = ('title',)

    def __unicode__(self):
        return '%s' %(self.title)

    def __str__(self):
        return '%s' %(self.title)


class Post(AutoSlugifyOnSaveModel):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=250, verbose_name=T("Title"), db_index=True, unique=True)
    slug = models.CharField(max_length=250, blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name=T("Categoery"))
    content = models.TextField(verbose_name=T("Content"))
    date = models.DateTimeField(verbose_name=T("Date"))
    image = models.ImageField(upload_to="uploads/", blank=True, null=True, verbose_name=T("Image"))
    url = models.URLField(verbose_name=T("URL"))

    class Meta:
        ordering = ('date',)

    def __unicode__(self):
        return '%s' %(self.title)

    def __str__(self):
        return '%s' %(self.title)
