# Python Script
import io
import sys
import json

sys.stdin.reconfigure(encoding='utf-8')
sys.stdout.reconfigure(encoding='utf-8')
sys.argv=sys.argv[1:]

print(json.dumps(sys.argv,ensure_ascii=False))