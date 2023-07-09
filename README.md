This repo was just created by doing the following:

1. Run `npx create-next-app`
2. Run `npm i @saas-ui/react @chakra-ui/react @chakra-ui/next-js @emotion/react@^11 @emotion/styled@^11 framer-motion@^6`
3. Wrap the primary `"Component"` in `_app.js `with `<SaasProvider>`
4. Run `npm run dev`
5. _Some_ of the styles from the create-next-app template disappear. See examples below:

**Without SaasProvider**
![image](https://github.com/saas-js/saas-ui/assets/127816255/1ff6450a-d102-4fa5-8d14-77f41ae9aa09)

**With SaasProvider**
![image](https://github.com/saas-js/saas-ui/assets/127816255/46c03fd5-86cd-4f0d-a9d2-44548ea84d75)
