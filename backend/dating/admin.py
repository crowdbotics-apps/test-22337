from django.contrib import admin
from .models import Dislike, Inbox, Like, Match, Profile, Setting, UserPhoto

admin.site.register(Match)
admin.site.register(Like)
admin.site.register(Inbox)
admin.site.register(Dislike)
admin.site.register(UserPhoto)
admin.site.register(Setting)
admin.site.register(Profile)

# Register your models here.
