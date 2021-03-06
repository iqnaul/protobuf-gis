# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: gis/protobuf/polygon.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from gis.protobuf import point_pb2 as gis_dot_protobuf_dot_point__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='gis/protobuf/polygon.proto',
  package='gis.protobuf',
  syntax='proto3',
  serialized_pb=_b('\n\x1agis/protobuf/polygon.proto\x12\x0cgis.protobuf\x1a\x18gis/protobuf/point.proto\"1\n\tPolygon2D\x12$\n\x05point\x18\x01 \x03(\x0b\x32\x15.gis.protobuf.Point2D\"1\n\tPolygon3D\x12$\n\x05point\x18\x01 \x03(\x0b\x32\x15.gis.protobuf.Point3D\":\n\x0eMultiPolygon2D\x12(\n\x07polygon\x18\x01 \x03(\x0b\x32\x17.gis.protobuf.Polygon2D\":\n\x0eMultiPolygon3D\x12(\n\x07polygon\x18\x01 \x03(\x0b\x32\x17.gis.protobuf.Polygon3Db\x06proto3')
  ,
  dependencies=[gis_dot_protobuf_dot_point__pb2.DESCRIPTOR,])




_POLYGON2D = _descriptor.Descriptor(
  name='Polygon2D',
  full_name='gis.protobuf.Polygon2D',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='point', full_name='gis.protobuf.Polygon2D.point', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=70,
  serialized_end=119,
)


_POLYGON3D = _descriptor.Descriptor(
  name='Polygon3D',
  full_name='gis.protobuf.Polygon3D',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='point', full_name='gis.protobuf.Polygon3D.point', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=121,
  serialized_end=170,
)


_MULTIPOLYGON2D = _descriptor.Descriptor(
  name='MultiPolygon2D',
  full_name='gis.protobuf.MultiPolygon2D',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='polygon', full_name='gis.protobuf.MultiPolygon2D.polygon', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=172,
  serialized_end=230,
)


_MULTIPOLYGON3D = _descriptor.Descriptor(
  name='MultiPolygon3D',
  full_name='gis.protobuf.MultiPolygon3D',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='polygon', full_name='gis.protobuf.MultiPolygon3D.polygon', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=232,
  serialized_end=290,
)

_POLYGON2D.fields_by_name['point'].message_type = gis_dot_protobuf_dot_point__pb2._POINT2D
_POLYGON3D.fields_by_name['point'].message_type = gis_dot_protobuf_dot_point__pb2._POINT3D
_MULTIPOLYGON2D.fields_by_name['polygon'].message_type = _POLYGON2D
_MULTIPOLYGON3D.fields_by_name['polygon'].message_type = _POLYGON3D
DESCRIPTOR.message_types_by_name['Polygon2D'] = _POLYGON2D
DESCRIPTOR.message_types_by_name['Polygon3D'] = _POLYGON3D
DESCRIPTOR.message_types_by_name['MultiPolygon2D'] = _MULTIPOLYGON2D
DESCRIPTOR.message_types_by_name['MultiPolygon3D'] = _MULTIPOLYGON3D
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Polygon2D = _reflection.GeneratedProtocolMessageType('Polygon2D', (_message.Message,), dict(
  DESCRIPTOR = _POLYGON2D,
  __module__ = 'gis.protobuf.polygon_pb2'
  # @@protoc_insertion_point(class_scope:gis.protobuf.Polygon2D)
  ))
_sym_db.RegisterMessage(Polygon2D)

Polygon3D = _reflection.GeneratedProtocolMessageType('Polygon3D', (_message.Message,), dict(
  DESCRIPTOR = _POLYGON3D,
  __module__ = 'gis.protobuf.polygon_pb2'
  # @@protoc_insertion_point(class_scope:gis.protobuf.Polygon3D)
  ))
_sym_db.RegisterMessage(Polygon3D)

MultiPolygon2D = _reflection.GeneratedProtocolMessageType('MultiPolygon2D', (_message.Message,), dict(
  DESCRIPTOR = _MULTIPOLYGON2D,
  __module__ = 'gis.protobuf.polygon_pb2'
  # @@protoc_insertion_point(class_scope:gis.protobuf.MultiPolygon2D)
  ))
_sym_db.RegisterMessage(MultiPolygon2D)

MultiPolygon3D = _reflection.GeneratedProtocolMessageType('MultiPolygon3D', (_message.Message,), dict(
  DESCRIPTOR = _MULTIPOLYGON3D,
  __module__ = 'gis.protobuf.polygon_pb2'
  # @@protoc_insertion_point(class_scope:gis.protobuf.MultiPolygon3D)
  ))
_sym_db.RegisterMessage(MultiPolygon3D)


# @@protoc_insertion_point(module_scope)
