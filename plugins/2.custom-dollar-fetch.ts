const serverError = async (locale: any, response: any) => {
  if (response.status == 500) {
    const message = locale == "en" ? "server error" : "خطأ في الخادم";
    showError({
      message: message,
      statusCode: 500,
    });
  }
};

export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie("token");
  const locale = (nuxtApp.$i18n as any)?.locale;
  const appConfig = useRuntimeConfig();

  const dollarfetch = $fetch.create({
    baseURL: appConfig.public.apiBase,
    onRequest({ request, options, error }) {
      const headers = options?.headers as unknown as Record<string, string>;

      // Set the Authorization header && Accept-Language
      if (Array.isArray(headers)) {
        if (token.value) {
          headers.push(["Authorization", `Bearer ${token.value}`]);
        }
        headers.push(["Accept-Language", locale.value]);
        headers.push(["Content-Type", "application/json"]);
      } else if (headers instanceof Headers) {
        if (token.value) {
          headers.set("Authorization", `Bearer ${token.value}`);
        }
        headers.set("Accept-Language", locale.value as string);
        headers.set("Content-Type", "application/json");
      } else {
        if (token.value) {
          (
            headers as Record<string, string>
          ).Authorization = `Bearer ${token.value}`;
        }
        headers["Accept-Language"] = locale.value;
        headers["Content-Type"] = "application/json";
      }
    },
    async onResponseError({ response, options, error }) {
      serverError(locale.value, response);
    },
  });

  // Expose to useNuxtApp().$dollarfetch
  return {
    provide: {
      dollarfetch,
    },
  };
});
