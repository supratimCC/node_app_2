const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const RoleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Role name is required. "],
      unique: true,
      maxLength: [50, "Maximum 50 cheracter is allowed. "],
      minLength: [1, "Minimum 1 cheracter is required. "],
      validate: {
        validator: function (v) {
          return /[a-zA-z0-9\(/\)/]/.test(v);
        },
        message: (props) => `${props.value} is not name. `,
      },
    },
    permissions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Permissions",
      },
    ],
  },
  { timestamps: true }
);

RoleSchema.plugin(mongoosePaginate);
const Roles = mongoose.model("Roles", RoleSchema);

module.exports = {
  Roles,
};
