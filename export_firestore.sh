#!/bin/bash

# Export Firestore data to JSON
firebase firestore:export --project code-4-change-spring-2023 your-project-id --outputFormat=json --archivePath=firestore_data.tar.gz

# Extract the exported data
tar -xvf firestore_data.tar.gz

# Convert JSON to CSV
node <<EOF
const fs = require('fs');
const json2csv = require('json2csv').parse;

const jsonData = JSON.parse(fs.readFileSync('./output_all_namespaces/firestore_export/default_collection/kind.json', 'utf8'));
const csvData = json2csv(jsonData);

fs.writeFileSync('./firestore_data.csv', csvData, 'utf8');
EOF

# Clean up extracted data and archive
rm -r ./output_all_namespaces
rm firestore_data.tar.gz

