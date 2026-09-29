import { View, Text, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import { useTranslation } from '@/lib/i18n';

export default function NotFoundScreen() {
  const { t } = useTranslation();
  return (
    <>
      <Stack.Screen options={{ title: '' }} />
      <View style={styles.container}>
        <Text style={styles.title}>{t.ui.notFoundTitle}</Text>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>{t.ui.goHome}</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600' as const,
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
