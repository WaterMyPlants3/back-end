const bcryptjs = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      // All password is Password1234 except admin
      return knex("users").insert([
        {
          username: "admin",
          phoneNumber: "545-899-1234",
          password: bcryptjs.hashSync("admin")
        },
        {
          username: "christopher",
          phoneNumber: "515-430-4546",
          password:
            "$2a$10$QyWCzMSt9o7bmoqed6nSB.NPGUxnG/cENObjukUlOAvnPdO7f8hP."
        },
        {
          username: "yamilet",
          phoneNumber: "817-800-3582",
          password:
            "$2a$10$4YG6oam93u46ON4bqeVkHOmLni/MIN.OU.TfFpvEPwakUNU5IBHwm"
        },
        {
          username: "tabitha",
          phoneNumber: "471-714-5247",
          password:
            "$2a$10$4QkQbk/PU/DJp7BEgHFbUuuWKhQk2qdE035ykmC1SAukYvy4W5H8O"
        },
        {
          username: "larry207",
          phoneNumber: "482-970-5826",
          password:
            "$2a$10$OIl2FpjmPpS0GDSRTwUmv.rbaS46/zX3giNLUq/k96C08ulNcaznS"
        },
        {
          username: "wendy623",
          phoneNumber: "945-670-0802",
          password:
            "$2a$10$uQWBJsnxn8O2rByxBt7Gnuvx6KzhzGURFcvv4NUtg56Q0Uco5lfHS"
        },
        {
          username: "russell",
          phoneNumber: "292-305-4126",
          password:
            "$2a$10$lrLu60k/3LNBV8bEL3/8ruFXWEcg6iWNOhx8dr5p2N3P1k.YvvrSO"
        },
        {
          username: "van.169",
          phoneNumber: "890-432-7965",
          password:
            "$2a$10$KpMXuaF4YLweUWGLTE/BGeiiGz5jMz4wslSSz0yOY59/xCaMd/ZSi"
        },
        {
          username: "carter",
          phoneNumber: "468-981-3935",
          password:
            "$2a$10$/ei84jSARPVVdMWekg.W6Of9o4D.6qA3KnUrXfyw58rVT8JU.oObG"
        },
        {
          username: "gavin894",
          phoneNumber: "736-931-4743",
          password:
            "$2a$10$VYngJmfmyZmEYvAvRXDYROFAz7StPJKpfAgHM2maMzXJnEHPKMRHW"
        },
        {
          username: "kathy.176",
          phoneNumber: "981-575-8459",
          password:
            "$2a$10$6/p7M3FBK./JDnUxL2vNQeXwYHGqMh7hQomJeiLj5iA/JO5tgmiy2"
        },
        {
          username: "joy.537",
          phoneNumber: "987-603-0485",
          password:
            "$2a$10$NtPXfPzspxaAYX64P6haeuc9Gtkq4nxHxsJuAsXbC7IugE/4r9oz."
        },
        {
          username: "victor",
          phoneNumber: "633-325-5287",
          password:
            "$2a$10$BDMcbltaWU4sWYJ8RjBaZu.J4Z8OjEdb3TWPQ57ErLz9uU5K0ppb."
        },
        {
          username: "van.1024",
          phoneNumber: "949-881-2228",
          password:
            "$2a$10$Zrwomw3JIpr2wt5XGfeR.uAGxOEvh0eZVcBNphQhZ2rPH.REyFq3O"
        },
        {
          username: "sebastian",
          phoneNumber: "913-420-8040",
          password:
            "$2a$10$dtVhP0.P65EjOk/OMR5CAO4btw.mTiaKPDGGN5QpPrlItQJnVDyky"
        },
        {
          username: "emily239",
          phoneNumber: "898-985-9489",
          password:
            "$2a$10$i2BBq0ow735JvgjpkbjXuO4e66vyigs4/iofdnckVbkwa0LBHnK7m"
        },
        {
          username: "ethen9726",
          phoneNumber: "942-334-9365",
          password:
            "$2a$10$yNe1UODoClEICjcw955kM.2forBWSP0hE2bE5mMB.PE.7i/KMCJeO"
        },
        {
          username: "william54",
          phoneNumber: "537-619-9876",
          password:
            "$2a$10$8iDwdbMwKHdTZGwwU7tR2./NhZv1WlrQ4zmzzSfAn8N0Y6ziBT74C"
        },
        {
          username: "victor45",
          phoneNumber: "886-537-9754",
          password:
            "$2a$10$qDnW4nBQHIbLzQJ/Yp/W9u0tH0jQ3x6ZBou3RpNNECgYuEh7rMzWS"
        },
        {
          username: "robert",
          phoneNumber: "474-207-6517",
          password:
            "$2a$10$XR9K3A.tP4rSz3mGH2lDLe4Woxr9fLp8ZicA89cOGzAPTqHbwbtC6"
        },
        {
          username: "elijah",
          phoneNumber: "920-705-8492",
          password:
            "$2a$10$HqtiKRGXvJaOgegvTPetVue133B5BFP5u3WPQL7I4XEqVs7N1vUMC"
        }
      ]);
    });
};
