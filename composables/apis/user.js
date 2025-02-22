export const userService = () => {
  const nuxtApp = useNuxtApp();

  const locale = nuxtApp?.$i18n?.locale;
  const toast = useToast();

  return {
    async JoinUs(joinData) {
      const { data, error, loading } = await useDollarFetch("join-us", {
        method: "POST",
        body: joinData,
      });

      if (error.value) {
        toast.add({
          color: "red",
          id: "join_failed",
          title: getError(error.value),
        });
        return { data: null, error, loading };
      }

      const message = locale.value == "en" ? "Welcome" : "مرحبا بك";
      toast.add({
        color: "green",
        id: "join_success",
        title: message,
      });

      return { data, error, loading };
    },
  };
};
