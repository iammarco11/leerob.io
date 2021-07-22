import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER // e.g. us1
});

export async function subscribers() {
  const response = await mailchimp.lists.getList(process.env.MAILCHIMP_AUDIENCE_ID);
  var subs = response.stats['member_count'];
  console.log(subs);
  return subs;
};
