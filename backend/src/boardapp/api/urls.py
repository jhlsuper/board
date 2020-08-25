from boardapp.api.views import BoardViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', BoardViewSet, basename='boards')
urlpatterns = router.urls