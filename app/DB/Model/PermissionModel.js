const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const PermissionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      maxLength: [50, "Maximum 50 cheracter is allowed. "],
      minLength: [1, "Minimum 1 cheracter is required. "],
      required: [true, "Permission is required. "],
      validate: {
        validator: function (v) {
          return /[a-zA-z0-9\(/\)/]/.test(v);
        },
        message: (props) => `${props.value} is not name. `,
      },
    },
  },
  { timestamps: true }
);

PermissionSchema.plugin(mongoosePaginate);
const Permissions = mongoose.model("Permissions", PermissionSchema);

module.exports = {
  Permissions,
};
