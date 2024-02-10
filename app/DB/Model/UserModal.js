const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const UserSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,

      maxLength: [50, "Maximum 50 cheracter is allowed. "],
      minLength: [1, "Minimum 1 cheracter is required. "],
      required: [true, "First name is required. "],
      validate: {
        validator: function (v) {
          return /[a-zA-z0-9\(/\)/]/.test(v);
        },
        message: (props) => `${props.value} is not name. `,
      },
    },

    last_name: {
      type: String,
      trim: true,
      maxLength: [50, "Maximum 50 cheracter is allowed. "],
      minLength: [1, "Minimum 1 cheracter is required. "],
      required: [true, "Last name is required. "],
      validate: {
        validator: function (v) {
          return /[a-zA-z0-9\(/\)/]/.test(v);
        },
        message: (props) => `${props.value} is not name. `,
      },
    },

    password: {
      type: String,
      trim: true,

      maxLength: [50, "Maximum 50 cheracter is allowed. "],
      minLength: [4, "Minimum 4 cheracter is required. "],
      required: [true, "Password is required. "],
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9*$/%&@!()]+$/.test(v);
        },
        message: (props) => `${props.value} is not name. `,
      },
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      maxLength: [50, "Maximum 50 cheracter is allowed. "],
      minLength: [1, "Minimum 1 cheracter is required. "],
      required: [true, "First name is required. "],
      validate: {
        validator: function (v) {
          return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(v);
        },
        message: (props) => `${props.value} is not name. `,
      },
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
  },
  { timestamps: true }
);

UserSchema.plugin(mongoosePaginate);
const Users = mongoose.model("Users", UserSchema);

module.exports = {
  Users,
};
