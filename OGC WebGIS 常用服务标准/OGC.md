# OGC联盟：
开放地理空间信息联盟 （Open Geospatial Consortium-OGC），是一个非盈利的国际标准组织，致力于提供地理信息行业软件和数据及服务的标准化工作。
OGC在1994年到2004年期间机构名为Open GIS Consortium， 后因业务需要更名为OGC。

## WMS服务 （Web Map Service）网络地图服务
WMS是指OGC的Web地图服务（Web Map Service）规范，它利用具有地理空间位置信息的数据制作地图，将地图定义为地理数据可视的表现。
WMS定义了一个规范的HTTP接口，支持标准HTTP协议的GET和POST请求，但多基于GET方式进行服务请求。能够根据用户请求返回相应的地图（包括PNG，GIF，JPEG等栅格形式或者是SVG和WEB CGM等矢量形式）。

## WFS服务 （Web Feature Service） 网络矢量（要素）服务
WFS是指OGC的Web矢量（要素）服务（Web Feature Service），返回的是矢量级的地理标记语言GML编码，并提供对矢量的增加、修改、删除等事务操作，是对Web地图服务的进一步深入。WFS通过OGC Filter构造查询条件，支持基于空间几何关系的查询，基于属性域的查询，还包括基于空间关系和属性域的共同查询。
WMS返回的是图层级的地图影像，而WFS是为了返回纯地理数据而设计的，它不包含任何关于绘制数据的建议。

## WCS服务 （Web Coverage Service） 网络覆盖/栅格/影像服务
WCS是指OGC的Web栅格服务（Web Coverage Service）面向空间影像数据，它将包含地理位置值的地理空间数据作为“栅格或者说“覆盖”（Coverage）”在网上相互交换。

## WPS服务 （Web Processing Server）
WPS是指OGC的网络处理服务Web Processing Server（WPS），一种用于在 Web 上提供和执行地理空间处理的国际规范。它为网络地理信息处理服务提供了标准化的输入和输出。GeoServer可通过安装插件支持该服务。

WPS 可用于：
使用即插即用的机制降低数据处理流程的复杂性。
连接不同的处理操作。
开发可以被其它用户重用的处理过程。
处理流程和模型集中与服务提供者，方便维护。
利用中央服务器集群的高运算性能。
方便对复杂模型的公共使用。

## WMTS服务 （Web Map Tile Service） 网络地图切片服务
WMTS指OGC的Web地图瓦片服务（Web Map Tile Service），是OGC提出的缓存技术标准。WMTS标准定义了一些操作，这些操作允许用户访问瓦片地图，是OGC首个支持RESTful访问的服务标准。

WMTS提供了一种采用预定义图块方法发布数字地图服务的标准化解决方案。WMTS弥补了WMS不能提供分块地图的不足，在服务器端把地图切割为一定不同级别大小的瓦片（瓦片矩阵集合），对客户端预先提供这些预定义的瓦片，将更多的数据处理操作如叠加和切割等放在客户端，降低服务器端的载荷。

WMTS牺牲了提供定制地图的灵活性，代之以通过提供静态数据（基础地图）来增强伸缩性，这些静态数据的范围框和比例尺被限定在各个图块内。这些固定的图块集使得对WMTS服务的实现可以使用一个仅简单返回已有文件的Web服务器即可，同时使得可以利用一些标准的诸如分布式缓存的网络机制实现伸缩性。

## WMS-C （Web Mapping Service - Cached） （Web Maping Service Tile Cashe）
WMS-C全称是Web Mapping Service - Cached，也被称为Web Maping Service Tile Cashe，对它完整的定义来源于OSGeo Wiki，2006年在FOSS4G会议上提出讨论。目的在于提供一种预先缓存数据的方法，以提升地图请求的速度。它是由OSGeo制定，而非OGC的标准，而且自始至终都没有写入OGC之中。

WMS-C通过bbox和resolutions去决定请求的地图层级，为了更加直观的请求地图瓦片，一些软件做了一些改进，例如WorldWind在请求中使用level/x/y三个参数，直观明了。典型的基于WMS-C的实现是TileCache。

需要注意的是，WMS-C目前已经被OSGeo Tile地图服务规范(TMS)和OGC Web地图服务标准(WMTS)取代。
已经使用WMS-C规范的程序目前仍然被支持，但是如果编写新的应用程序，应该考虑TMS和WMTS。

## TMS （Tile Map Service） 切片地图服务
TMS是指OSGeo的切片地图服务规范（Tile Map Service），提供的操作允许用户按需访问切片地图。将切片保存到了本地，使得访问速度更快，还支持修改坐标系，是一种纯RESTful的服务。

## 总结
WMS：动态地图服务，在ArcGIS中我们经常利用理由的mxd文件发布的服务，就是这种地图服务，如果你的数据会变化，建议发这种服务。这种服务优点是动态，缺点是慢。
WMS-C：可以理解为WMS的升级版，预先缓存瓦片，按需请求，提高了访问的速度。
WMTS：相比WMS，牺牲了提供定制地图的灵活性，代之以通过提供静态数据（基础地图）来增强伸缩性，这些静态数据的范围框和比例尺被限定在各个图块内。
WFS：支持要素的增删改等事务操作，支持空间和属性查询。
WCS：主要是面向空间影像数据
WPS：主要是用来发起web端的空间运算处理工作，如裁切、合并等空间运算。