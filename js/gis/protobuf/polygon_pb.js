/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gis_protobuf_coordinate_pb = require('../../gis/protobuf/coordinate_pb.js');
goog.exportSymbol('proto.gis.protobuf.MultiPolygon2D', null, global);
goog.exportSymbol('proto.gis.protobuf.MultiPolygon3D', null, global);
goog.exportSymbol('proto.gis.protobuf.Polygon2D', null, global);
goog.exportSymbol('proto.gis.protobuf.Polygon3D', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gis.protobuf.Polygon2D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gis.protobuf.Polygon2D.repeatedFields_, null);
};
goog.inherits(proto.gis.protobuf.Polygon2D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gis.protobuf.Polygon2D.displayName = 'proto.gis.protobuf.Polygon2D';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gis.protobuf.Polygon2D.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gis.protobuf.Polygon2D.prototype.toObject = function(opt_includeInstance) {
  return proto.gis.protobuf.Polygon2D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gis.protobuf.Polygon2D} msg The msg instance to transform.
 * @return {!Object}
 */
proto.gis.protobuf.Polygon2D.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointList: jspb.Message.toObjectList(msg.getPointList(),
    gis_protobuf_coordinate_pb.Coordinate2D.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gis.protobuf.Polygon2D}
 */
proto.gis.protobuf.Polygon2D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gis.protobuf.Polygon2D;
  return proto.gis.protobuf.Polygon2D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gis.protobuf.Polygon2D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gis.protobuf.Polygon2D}
 */
proto.gis.protobuf.Polygon2D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gis_protobuf_coordinate_pb.Coordinate2D;
      reader.readMessage(value,gis_protobuf_coordinate_pb.Coordinate2D.deserializeBinaryFromReader);
      msg.addPoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gis.protobuf.Polygon2D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gis.protobuf.Polygon2D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gis.protobuf.Polygon2D} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.gis.protobuf.Polygon2D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gis_protobuf_coordinate_pb.Coordinate2D.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Coordinate2D point = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.gis.protobuf.Coordinate2D>}
 */
proto.gis.protobuf.Polygon2D.prototype.getPointList = function() {
  return /** @type{!Array.<!proto.gis.protobuf.Coordinate2D>} */ (
    jspb.Message.getRepeatedWrapperField(this, gis_protobuf_coordinate_pb.Coordinate2D, 1));
};


/** @param {!Array.<!proto.gis.protobuf.Coordinate2D>} value */
proto.gis.protobuf.Polygon2D.prototype.setPointList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.gis.protobuf.Coordinate2D=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gis.protobuf.Coordinate2D}
 */
proto.gis.protobuf.Polygon2D.prototype.addPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gis.protobuf.Coordinate2D, opt_index);
};


proto.gis.protobuf.Polygon2D.prototype.clearPointList = function() {
  this.setPointList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gis.protobuf.Polygon3D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gis.protobuf.Polygon3D.repeatedFields_, null);
};
goog.inherits(proto.gis.protobuf.Polygon3D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gis.protobuf.Polygon3D.displayName = 'proto.gis.protobuf.Polygon3D';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gis.protobuf.Polygon3D.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gis.protobuf.Polygon3D.prototype.toObject = function(opt_includeInstance) {
  return proto.gis.protobuf.Polygon3D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gis.protobuf.Polygon3D} msg The msg instance to transform.
 * @return {!Object}
 */
proto.gis.protobuf.Polygon3D.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointList: jspb.Message.toObjectList(msg.getPointList(),
    gis_protobuf_coordinate_pb.Coordinate3D.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gis.protobuf.Polygon3D}
 */
proto.gis.protobuf.Polygon3D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gis.protobuf.Polygon3D;
  return proto.gis.protobuf.Polygon3D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gis.protobuf.Polygon3D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gis.protobuf.Polygon3D}
 */
proto.gis.protobuf.Polygon3D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new gis_protobuf_coordinate_pb.Coordinate3D;
      reader.readMessage(value,gis_protobuf_coordinate_pb.Coordinate3D.deserializeBinaryFromReader);
      msg.addPoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gis.protobuf.Polygon3D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gis.protobuf.Polygon3D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gis.protobuf.Polygon3D} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.gis.protobuf.Polygon3D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      gis_protobuf_coordinate_pb.Coordinate3D.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Coordinate3D point = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.gis.protobuf.Coordinate3D>}
 */
proto.gis.protobuf.Polygon3D.prototype.getPointList = function() {
  return /** @type{!Array.<!proto.gis.protobuf.Coordinate3D>} */ (
    jspb.Message.getRepeatedWrapperField(this, gis_protobuf_coordinate_pb.Coordinate3D, 1));
};


/** @param {!Array.<!proto.gis.protobuf.Coordinate3D>} value */
proto.gis.protobuf.Polygon3D.prototype.setPointList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.gis.protobuf.Coordinate3D=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gis.protobuf.Coordinate3D}
 */
proto.gis.protobuf.Polygon3D.prototype.addPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gis.protobuf.Coordinate3D, opt_index);
};


proto.gis.protobuf.Polygon3D.prototype.clearPointList = function() {
  this.setPointList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gis.protobuf.MultiPolygon2D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gis.protobuf.MultiPolygon2D.repeatedFields_, null);
};
goog.inherits(proto.gis.protobuf.MultiPolygon2D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gis.protobuf.MultiPolygon2D.displayName = 'proto.gis.protobuf.MultiPolygon2D';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gis.protobuf.MultiPolygon2D.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gis.protobuf.MultiPolygon2D.prototype.toObject = function(opt_includeInstance) {
  return proto.gis.protobuf.MultiPolygon2D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gis.protobuf.MultiPolygon2D} msg The msg instance to transform.
 * @return {!Object}
 */
proto.gis.protobuf.MultiPolygon2D.toObject = function(includeInstance, msg) {
  var f, obj = {
    polygonList: jspb.Message.toObjectList(msg.getPolygonList(),
    proto.gis.protobuf.Polygon2D.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gis.protobuf.MultiPolygon2D}
 */
proto.gis.protobuf.MultiPolygon2D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gis.protobuf.MultiPolygon2D;
  return proto.gis.protobuf.MultiPolygon2D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gis.protobuf.MultiPolygon2D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gis.protobuf.MultiPolygon2D}
 */
proto.gis.protobuf.MultiPolygon2D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gis.protobuf.Polygon2D;
      reader.readMessage(value,proto.gis.protobuf.Polygon2D.deserializeBinaryFromReader);
      msg.addPolygon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gis.protobuf.MultiPolygon2D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gis.protobuf.MultiPolygon2D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gis.protobuf.MultiPolygon2D} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.gis.protobuf.MultiPolygon2D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolygonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.gis.protobuf.Polygon2D.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Polygon2D polygon = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.gis.protobuf.Polygon2D>}
 */
proto.gis.protobuf.MultiPolygon2D.prototype.getPolygonList = function() {
  return /** @type{!Array.<!proto.gis.protobuf.Polygon2D>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gis.protobuf.Polygon2D, 1));
};


/** @param {!Array.<!proto.gis.protobuf.Polygon2D>} value */
proto.gis.protobuf.MultiPolygon2D.prototype.setPolygonList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.gis.protobuf.Polygon2D=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gis.protobuf.Polygon2D}
 */
proto.gis.protobuf.MultiPolygon2D.prototype.addPolygon = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gis.protobuf.Polygon2D, opt_index);
};


proto.gis.protobuf.MultiPolygon2D.prototype.clearPolygonList = function() {
  this.setPolygonList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gis.protobuf.MultiPolygon3D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gis.protobuf.MultiPolygon3D.repeatedFields_, null);
};
goog.inherits(proto.gis.protobuf.MultiPolygon3D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.gis.protobuf.MultiPolygon3D.displayName = 'proto.gis.protobuf.MultiPolygon3D';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gis.protobuf.MultiPolygon3D.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gis.protobuf.MultiPolygon3D.prototype.toObject = function(opt_includeInstance) {
  return proto.gis.protobuf.MultiPolygon3D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gis.protobuf.MultiPolygon3D} msg The msg instance to transform.
 * @return {!Object}
 */
proto.gis.protobuf.MultiPolygon3D.toObject = function(includeInstance, msg) {
  var f, obj = {
    polygonList: jspb.Message.toObjectList(msg.getPolygonList(),
    proto.gis.protobuf.Polygon3D.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gis.protobuf.MultiPolygon3D}
 */
proto.gis.protobuf.MultiPolygon3D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gis.protobuf.MultiPolygon3D;
  return proto.gis.protobuf.MultiPolygon3D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gis.protobuf.MultiPolygon3D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gis.protobuf.MultiPolygon3D}
 */
proto.gis.protobuf.MultiPolygon3D.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gis.protobuf.Polygon3D;
      reader.readMessage(value,proto.gis.protobuf.Polygon3D.deserializeBinaryFromReader);
      msg.addPolygon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gis.protobuf.MultiPolygon3D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gis.protobuf.MultiPolygon3D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gis.protobuf.MultiPolygon3D} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.gis.protobuf.MultiPolygon3D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolygonList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.gis.protobuf.Polygon3D.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Polygon3D polygon = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.gis.protobuf.Polygon3D>}
 */
proto.gis.protobuf.MultiPolygon3D.prototype.getPolygonList = function() {
  return /** @type{!Array.<!proto.gis.protobuf.Polygon3D>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gis.protobuf.Polygon3D, 1));
};


/** @param {!Array.<!proto.gis.protobuf.Polygon3D>} value */
proto.gis.protobuf.MultiPolygon3D.prototype.setPolygonList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.gis.protobuf.Polygon3D=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gis.protobuf.Polygon3D}
 */
proto.gis.protobuf.MultiPolygon3D.prototype.addPolygon = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gis.protobuf.Polygon3D, opt_index);
};


proto.gis.protobuf.MultiPolygon3D.prototype.clearPolygonList = function() {
  this.setPolygonList([]);
};


goog.object.extend(exports, proto.gis.protobuf);